import classNames from "classnames";
import { FC } from "react";
import { ButtonProps } from "./types";
import { buttonStyles } from "./styles/button.css";

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, id, startIcon, endIcon, ...rest } = props;
  const classes = classNames(buttonStyles, className);

  return (
    <button {...rest} id={id} className={classes}>
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};
