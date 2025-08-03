import { HTMLAttributes, ReactNode } from "react";

export type TableSectionProps = HTMLAttributes<HTMLTableSectionElement>;
export type TableRootProps = HTMLAttributes<HTMLTableElement>;
export type TableRowProps = HTMLAttributes<HTMLTableRowElement>;
export type TableDataProps = HTMLAttributes<HTMLTableDataCellElement>;
export type TableHeadProps = HTMLAttributes<HTMLTableCellElement> & {
  children: ReactNode;
  startIcon?: ReactNode;
};
export type TablePaginationProps = HTMLAttributes<HTMLDivElement> & {
  page: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
  onChangeRowsPerPage: (pageSize: number) => void;
  onSort: () => void;
};
export type TableSkeletonProps = HTMLAttributes<HTMLDivElement> & {
  rows?: number;
};
