import { FC } from "react";

import classNames from "classnames";
import { DialogParagraphProps } from "./types";
import { dialogParagraphStyles } from "./styles/dialog-paragraph.css";

export const DialogParagraph: FC<DialogParagraphProps> = (props) => {
  const { children, className, id, title, ...rest } = props;
  const classes = classNames(dialogParagraphStyles, className);

  return (
    <p className={classes} id={id} {...rest}>
      {title}
      {children}
    </p>
  );
};
