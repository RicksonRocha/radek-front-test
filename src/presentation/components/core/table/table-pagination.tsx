import classNames from "classnames";
import { FC } from "react";

import { TablePaginationProps } from "./types";
import { tablePaginationStyles } from "./styles/table-pagination.css";
import { Button } from "../button";
import { ArrowLeftIcon } from "@components/icons/arrow-left";
import { ArrowRightIcon } from "@components/icons/arrow-right";
import { ArrowDownIcon } from "@components/icons/arrow-down";
import { ArrowUpIcon } from "@components/icons/arrow-up";

export const TablePagination: FC<TablePaginationProps> = (props) => {
  const {
    children,
    className,
    id,
    page,
    totalPages,
    onNextPage,
    onPreviousPage,
    onChangeRowsPerPage,
    onSort,
    ...rest
  } = props;
  const classes = classNames(tablePaginationStyles, className);

  const notAllowed = { opacity: 0.5, cursor: "not-allowed" };

  return (
    <div {...rest} id={id} className={classes}>
      <Button onClick={onSort}>
        <ArrowDownIcon customSize="lg" />
        <ArrowUpIcon customSize="lg" />
      </Button>
      <div>Itens por página</div>
      <select
        name="items"
        id="itms"
        style={{ padding: 5, borderRadius: 5 }}
        onChange={(ev) => onChangeRowsPerPage(+ev.target.value)}
      >
        <option value="0" defaultChecked disabled>
          Selecione a quantidade
        </option>
        {[1, 2, 3].map((quantity) => {
          const value = quantity * 5;
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
      <Button style={page === 1 ? notAllowed : {}} onClick={onPreviousPage}>
        <ArrowLeftIcon customSize="lg" />
      </Button>
      <div>
        Página {page}/{totalPages}
      </div>
      <Button
        style={page === totalPages ? notAllowed : {}}
        onClick={onNextPage}
      >
        <ArrowRightIcon customSize="lg" />
      </Button>
      {children}
    </div>
  );
};
