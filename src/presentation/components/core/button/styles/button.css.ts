import { style } from "@vanilla-extract/css";

import { theme } from "../../../styles/theme/theme.css";

export const buttonStyles = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: 4,
  whiteSpace: "nowrap",
  backgroundColor: theme.colors.actionRipple,
  color: "#fff",
  padding: "0.8rem 2rem",
  borderRadius: 4,
  cursor: "pointer",
  selectors: {
    "&:hover": {
      backgroundColor: theme.colors.penWhite,
      color: "#000",
    },
  },
  maxHeight: 28,
});
