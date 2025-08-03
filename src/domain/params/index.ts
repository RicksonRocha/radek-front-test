export type PaginatedResponse<T> = {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: T[];
};

export type QueryParams = {
  _page?: number;
  _per_page?: number;
  name?: string;
};
