import classNames from "classnames";
import { FC } from "react";

import { TableDataProps, TableRowProps } from "./types";
import { tableDataStyles } from "./styles/table-data.css";

export const TableData: FC<TableDataProps> = (props) => {
  const { children, className, id, ...rest } = props;
  const classes = classNames(tableDataStyles, className);

  return (
    <td {...rest} id={id} className={classes}>
      {children}
    </td>
  );
};
