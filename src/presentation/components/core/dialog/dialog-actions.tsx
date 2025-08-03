"use client";

import { FC } from "react";

import classNames from "classnames";
import { DialogActionsProps } from "./types";
import { dialogActionsStyles } from "./styles/dialog-actions.css";

export const DialogActions: FC<DialogActionsProps> = (props) => {
  const { children, className, id, ...rest } = props;
  const classes = classNames(dialogActionsStyles, className);

  return (
    <div className={classes} id={id} {...rest}>
      {children}
    </div>
  );
};
