"use client";

import { useParams, useRouter } from "next/navigation";
import {
  useEditCentralMutation,
  useSaveCentralMutation,
} from "../../hooks/centrals-query.hook";
import { useCentralStore } from "../../store/central.store";
import {
  CENTRAL_SCHEMA,
  CentralFormValue,
} from "../../validators/central/central.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModelsQuery } from "../../hooks/models-query.hook";
import { useEffect } from "react";

export const useCentralFormHook = () => {
  const router = useRouter();
  const { id: centralId } = useParams();
  const { central, clearCentral } = useCentralStore((state) => state);
  const saveMutation = useSaveCentralMutation();
  const editMutation = useEditCentralMutation();
  const modelsQuery = useModelsQuery({ _page: 1, _per_page: 10 });

  const formMethods = useForm<CentralFormValue>({
    resolver: zodResolver(CENTRAL_SCHEMA),
    defaultValues: central || { name: "", mac: "", modelId: 0 },
  });

  const { reset } = formMethods;

  const onSubmit = (data: CentralFormValue) => {
    if (centralId) {
      editMutation.mutate({ centralId: centralId as string, data });
    } else {
      saveMutation.mutate(data);
    }
    handleBack();
  };

  const handleBack = () => {
    clearCentral();
    router.push("/centrais");
  };

  useEffect(() => {
    if (central) {
      reset(central);
    }
  }, [central, reset]);

  return {
    onSubmit,
    central,
    centralId,
    handleBack,
    formMethods,
    modelsQuery,
  };
};
