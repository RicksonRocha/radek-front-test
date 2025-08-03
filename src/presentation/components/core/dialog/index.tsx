"use client";

import { DialogActions } from "./dialog-actions";
import { DialogContent } from "./dialog-content";
import { DialogParagraph } from "./dialog-paragraph";
import { DialogRoot } from "./dialog-root";
import { DialogTitle } from "./dialog-title";

export const Dialog = {
  Root: DialogRoot,
  Title: DialogTitle,
  Content: DialogContent,
  Paragraph: DialogParagraph,
  Actions: DialogActions,
};
