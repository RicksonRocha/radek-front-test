import classNames from "classnames";
import { FC } from "react";
import { tableHeadStyles } from "./styles/table-head.css";
import { TableHeadProps } from "./types";

export const TableHead: FC<TableHeadProps> = (props) => {
  const { children, className, id, startIcon, ...rest } = props;
  const classes = classNames(tableHeadStyles, className);

  return (
    <th {...rest} id={id} className={classes}>
      {children}
    </th>
  );
};
