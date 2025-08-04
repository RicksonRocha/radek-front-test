import classNames from "classnames";
import { formErrorStyles } from "./styles/form-error.css";
import { FormParagraphProps } from "./types";
import { FC } from "react";

export const FormError: FC<FormParagraphProps> = (props) => {
  const { children, className, id, ...rest } = props;
  const classes = classNames(formErrorStyles, className);

  return (
    <p className={classes} id={id} {...rest}>
      {children}
    </p>
  );
};
