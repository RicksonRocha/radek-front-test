import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const dialogRootStyles = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: theme.colors.actionRipple,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
  padding: 8,
});
