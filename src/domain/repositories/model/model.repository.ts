import { Model } from "@domain/entities/model/model.entity";
import { PaginatedResponse, QueryParams } from "@domain/params";

export interface IModelRepository {
  findAll(params: QueryParams): Promise<PaginatedResponse<Model>>;
}
