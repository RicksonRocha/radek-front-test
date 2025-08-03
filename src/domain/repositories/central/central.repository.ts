import { Central } from "@domain/entities/central/central.entity";
import { QueryParams, PaginatedResponse } from "@domain/params";
import { CentralFormValue } from "../../../presentation/validators/central/central.schema";

export interface ICentralRepository {
  findById(id: Central["id"]): Promise<Central | null>;
  findAll(params: QueryParams): Promise<PaginatedResponse<Central>>;
  save(central: CentralFormValue): Promise<void>;
  edit(id: Central["id"], central: CentralFormValue): Promise<void>;
  delete(id: Central["id"]): Promise<void>;
}
