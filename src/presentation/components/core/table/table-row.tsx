import classNames from "classnames";
import { FC } from "react";

import { TableRowProps } from "./types";
import { tableRowStyles } from "./styles/table-row.css";

export const TableRow: FC<TableRowProps> = (props) => {
  const { children, className, id, ...rest } = props;
  const classes = classNames(tableRowStyles, className);

  return (
    <tr {...rest} id={id} className={classes}>
      {children}
    </tr>
  );
};
