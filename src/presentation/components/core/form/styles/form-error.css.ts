import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const formErrorStyles = style({
  color: theme.colors.alert,
  fontSize: 12,
  paddingTop: 4,
});
