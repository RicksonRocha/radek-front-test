import classNames from "classnames";
import { FC } from "react";
import { tableHeadStyles } from "./styles/table-head.css";
import { TableSectionProps } from "./types";

export const TableHeader: FC<TableSectionProps> = (props) => {
  const { children, className, id, ...rest } = props;
  const classes = classNames(tableHeadStyles, className);

  return (
    <thead {...rest} id={id} className={classes}>
      {children}
    </thead>
  );
};
