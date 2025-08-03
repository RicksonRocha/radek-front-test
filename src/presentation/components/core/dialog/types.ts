import { HTMLAttributes } from "react";

type DialogProps = HTMLAttributes<HTMLDialogElement> & { open: boolean };

type DialogContentProps = HTMLAttributes<HTMLDivElement>;
type DialogActionsProps = HTMLAttributes<HTMLDivElement>;
type DialogTitleProps = HTMLAttributes<HTMLHeadingElement>;
type DialogParagraphProps = HTMLAttributes<HTMLParagraphElement>;

export type {
  DialogProps,
  DialogContentProps,
  DialogTitleProps,
  DialogParagraphProps,
  DialogActionsProps,
};
