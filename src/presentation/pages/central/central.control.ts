import { useEffect, useState } from "react";
import { useCentralStore } from "../../store/central.store";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  useCentralsQuery,
  useDeleteCentralMutation,
} from "../../hooks/centrals-query.hook";
import { useModelsQuery } from "../../hooks/models-query.hook";
import { SEARCH_SCHEMA } from "../../validators/search/search.schema";
import { Central } from "@domain/entities/central/central.entity";

const TABLE_HEADS: { id: string; name: string }[] = [
  { id: "name", name: "Nome" },
  { id: "mac", name: "MAC" },
  { id: "model", name: "Modelo" },
  { id: "actions", name: "Ações" },
];

export const useCentralHook = () => {
  const router = useRouter();
  const { setCount, setCentral } = useCentralStore((state) => state);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [search, setSearch] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ search: string }>({
    resolver: zodResolver(SEARCH_SCHEMA),
    defaultValues: { search: "" },
  });

  const onSubmit = (data: { search: string }) => {
    setSearch(data.search);
  };

  const modelsQuery = useModelsQuery({ _page: 1, _per_page: 10 });
  const centralsQuery = useCentralsQuery({
    _page: page,
    _per_page: pageSize,
    name: search,
  });
  const deleteMutation = useDeleteCentralMutation();

  const MODELS_MAP = new Map(
    modelsQuery.data?.data.map((m) => [+m.id, m.name]) ?? []
  );
  const totalPages = centralsQuery.data?.pages ?? 1;
  const noData = centralsQuery?.data?.data.length == 0;

  const handlePreviousPage = () => setPage(Math.max(1, page - 1));
  const handleNextPage = () => setPage(Math.min(totalPages, page + 1));
  const handleChangeRowsPerPage = (pageSize: number) => setPageSize(pageSize);

  const sortedData = [...(centralsQuery.data?.data ?? [])].sort((a, b) => {
    if (sortDirection === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  const handleReset = () => {
    reset({ search: "" }, { keepErrors: false });
    setSearch("");
    centralsQuery.refetch();
  };

  const handleSort = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const handleCreate = () => router.push("/centrais/criar");

  const handleEdit = (central: Central) => {
    setCentral(central);
    router.push(`/centrais/${central.id}`);
  };

  const confirmDelete = (id: string) => {
    deleteMutation.mutate(id);
    setIsOpen(false);
  };

  useEffect(
    () => setCount(centralsQuery.data?.items ?? 0),
    [centralsQuery.data?.items]
  );

  return {
    page,
    handleSort,
    deleteId,
    setDeleteId,
    confirmDelete,
    modelsQuery,
    centralsQuery,
    isOpen,
    setIsOpen,
    TABLE_HEADS,
    handleEdit,
    MODELS_MAP,
    handleChangeRowsPerPage,
    handleNextPage,
    handlePreviousPage,
    sortedData,
    totalPages,
    noData,
    handleCreate,
    handleSubmit,
    register,
    onSubmit,
    errors,
    handleReset,
  };
};
