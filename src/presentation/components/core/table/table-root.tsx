import classNames from "classnames";
import { FC } from "react";

import { TableRootProps } from "./types";
import { tableRootStyles } from "./styles/table-root.css";

export const TableRoot: FC<TableRootProps> = (props) => {
  const { children, className, id, ...rest } = props;
  const classes = classNames(tableRootStyles, className);

  return (
    <table {...rest} id={id} className={classes}>
      {children}
    </table>
  );
};
