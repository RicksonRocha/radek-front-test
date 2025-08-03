import { Central } from "@domain/entities/central/central.entity";
import { QueryParams } from "@domain/params";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CentralRepository } from "../../infrastructure/implementations/central.impl";
import { CentralFormValue } from "../validators/central/central.schema";

const { findAll, edit, save, delete: deleteCentral } = CentralRepository;

export const useCentralsQuery = (params: QueryParams) => {
  return useQuery({
    queryKey: ["centrals", params],
    queryFn: () => findAll(params),
  });
};

export const useSaveCentralMutation = () => {
  return useMutation({
    mutationFn: (data: CentralFormValue) => {
      return save(data);
    },
  });
};

export const useEditCentralMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      centralId,
      data,
    }: {
      centralId: Central["id"];
      data: CentralFormValue;
    }) => {
      return edit(centralId, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["centrals"] });
    },
  });
};

export const useDeleteCentralMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: Central["id"]) => deleteCentral(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["centrals"] });
    },
  });
};
