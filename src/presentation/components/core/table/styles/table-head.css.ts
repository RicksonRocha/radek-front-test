import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const tableHeadStyles = style({
  padding: "1.5rem",
  borderBottom: `2px solid ${theme.colors.background}`,
});
