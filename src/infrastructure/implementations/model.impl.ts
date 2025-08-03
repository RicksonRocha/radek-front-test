import { Model } from "@domain/entities/model/model.entity";
import { PaginatedResponse, QueryParams } from "@domain/params";
import { api } from "../api";
import { IModelRepository } from "@domain/repositories/model/model.repository";
import { endpoints } from "../endpoints";

const { models } = endpoints;

export const ModelRepository: IModelRepository = {
  findAll: async (params: QueryParams): Promise<PaginatedResponse<Model>> => {
    const { data } = await api.get(models, { params });
    return data;
  },
};
