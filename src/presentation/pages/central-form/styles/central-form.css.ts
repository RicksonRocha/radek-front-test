import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const containerPage = style({
  marginTop: "5rem",
  margin: "2% 5%",
  height: "90vh",
  fontSize: 16,
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
});

export const formStyles = style({
  maxWidth: "50%",
  minWidth: "100",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  padding: 24,
  borderRadius: 12,
  backgroundColor: theme.colors.success,
});

export const formInputStyles = style({
  borderRadius: 12,
  padding: 12,
});
