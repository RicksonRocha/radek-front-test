import classNames from "classnames";
import { FC } from "react";

import { ScrollbarProps } from "./types";
import { scrollbarStyles } from "./styles/scrollbar.css";

export const Scrollbar: FC<ScrollbarProps> = (props) => {
  const { children, className, id, ...rest } = props;
  const classes = classNames(scrollbarStyles, className);

  return (
    <div {...rest} id={id} className={classes}>
      {children}
    </div>
  );
};
