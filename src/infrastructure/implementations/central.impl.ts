import { ICentralRepository } from "@domain/repositories/central/central.repository";
import { api } from "../api";
import { Central } from "@domain/entities/central/central.entity";
import { QueryParams, PaginatedResponse } from "@domain/params";
import { CentralFormValue } from "../../presentation/validators/central/central.schema";
import { endpoints } from "../endpoints";

const { centrals } = endpoints;

export const CentralRepository: ICentralRepository = {
  findById: async (id: Central["id"]): Promise<Central | null> => {
    const { data } = await api.get(centrals + id);
    return data;
  },
  findAll: async (params: QueryParams): Promise<PaginatedResponse<Central>> => {
    const { data } = await api.get(centrals, { params });
    return data;
  },
  save: async (central: CentralFormValue): Promise<void> => {
    const { data } = await api.post(centrals, central);
    return data;
  },
  edit: async (id, central: CentralFormValue): Promise<void> => {
    const { data } = await api.put(`${centrals}/${id}`, central);
    return data;
  },
  delete: async (id): Promise<void> => {
    return await api.delete(`${centrals}/${id}`);
  },
};
