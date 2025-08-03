import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const tableRowStyles = style({
  textAlign: "center",
  ":hover": { backgroundColor: theme.colors.actionRipple },
});
