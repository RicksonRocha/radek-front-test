import { FC } from "react";

import classNames from "classnames";
import { DialogParagraphProps } from "./types";
import { dialogParagraphStyles } from "./styles/dialog-paragraph.css";

export const DialogParagraph: FC<DialogParagraphProps> = (props) => {
  const { children, className, id, ...rest } = props;
  const classes = classNames(dialogParagraphStyles, className);

  return (
    <h2 className={classes} id={id} {...rest}>
      {children}
    </h2>
  );
};
