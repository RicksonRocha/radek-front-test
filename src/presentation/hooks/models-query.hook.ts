import { QueryParams } from "@domain/params";
import { ModelRepository } from "../../infrastructure/implementations/model.impl";
import { useQuery } from "@tanstack/react-query";

const { findAll } = ModelRepository;

export const useModelsQuery = (params: QueryParams) => {
  return useQuery({
    queryKey: ["models", params],
    queryFn: () => findAll(params),
  });
};
