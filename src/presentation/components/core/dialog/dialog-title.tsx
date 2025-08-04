"use client";

import { FC } from "react";

import classNames from "classnames";
import { DialogTitleProps } from "./types";
import { dialogTitleStyles } from "./styles/dialog-title.css";

export const DialogTitle: FC<DialogTitleProps> = (props) => {
  const { children, className, id, title, ...rest } = props;
  const classes = classNames(dialogTitleStyles, className);

  return (
    <h2 className={classes} id={id} {...rest}>
      {title}
      {children}
    </h2>
  );
};
