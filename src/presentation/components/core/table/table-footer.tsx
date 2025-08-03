import classNames from "classnames";
import { FC } from "react";

import { TableSectionProps } from "./types";
import { tableFootStyles } from "./styles/table-foot.css";

export const TableFooter: FC<TableSectionProps> = (props) => {
  const { children, className, id, ...rest } = props;
  const classes = classNames(tableFootStyles, className);

  return (
    <tfoot {...rest} id={id} className={classes}>
      {children}
    </tfoot>
  );
};
