"use client";

import classNames from "classnames";
import { FC, useEffect } from "react";
import { dialogRootStyles } from "./styles/dialog-root.css";
import { DialogProps } from "./types";

export const DialogRoot: FC<DialogProps> = (props) => {
  const { children, className, id, open, ...rest } = props;
  const classes = classNames(dialogRootStyles, className);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  if (!open) return null;

  return (
    <dialog className={classes} {...rest} id={id}>
      {children}
    </dialog>
  );
};
