import classNames from "classnames";
import { Table } from ".";
import { tableSkeletonStyles } from "./styles/table-skeleton.css";
import { TableSkeletonProps } from "./types";
import { FC } from "react";

export const TableSkeleton: FC<TableSkeletonProps> = (props) => {
  const { className, id, rows = 5 } = props;
  const classes = classNames(tableSkeletonStyles, className);
  return (
    <Table.Root>
      <tbody>
        {Array.from({ length: rows }).map((_, index) => (
          <tr key={index} className={tableSkeletonStyles.tr}>
            <td className={tableSkeletonStyles.tdSkeleton}></td>
            <td className={tableSkeletonStyles.tdSkeleton}></td>
            <td className={tableSkeletonStyles.tdSkeleton}></td>
            <td className={tableSkeletonStyles.tdSkeleton}></td>
          </tr>
        ))}
      </tbody>
    </Table.Root>
  );
};
