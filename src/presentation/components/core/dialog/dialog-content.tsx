"use client";

import { FC } from "react";

import classNames from "classnames";
import { dialogContentStyles } from "./styles/dialog-content.css";
import { DialogContentProps } from "./types";

export const DialogContent: FC<DialogContentProps> = (props) => {
  const { children, className, id, ...rest } = props;
  const classes = classNames(dialogContentStyles, className);

  return (
    <div className={classes} id={id} {...rest}>
      {children}
    </div>
  );
};
