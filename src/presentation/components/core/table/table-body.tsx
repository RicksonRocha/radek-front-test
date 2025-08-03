import classNames from "classnames";
import { FC } from "react";

import { TableSectionProps } from "./types";
import { tableBodyStyles } from "./styles/table-body.css";

export const TableBody: FC<TableSectionProps> = (props) => {
  const { children, className, id, ...rest } = props;
  const classes = classNames(tableBodyStyles, className);

  return (
    <tbody {...rest} id={id} className={classes}>
      {children}
    </tbody>
  );
};
