import { style } from "@vanilla-extract/css";

import { theme } from "../../../styles/theme/theme.css";

export const cardStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: theme.colors.secondarySurface,
  borderRadius: "12px",
  padding: "2rem",
  color: "white",
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  width: "inherit",
  gap: 8,
});
