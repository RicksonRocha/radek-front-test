import { style, keyframes } from "@vanilla-extract/css";

const pulse = keyframes({
  "0%": { backgroundColor: "#e0e0e0" },
  "50%": { backgroundColor: "#f0f0f0" },
  "100%": { backgroundColor: "#e0e0e0" },
});

export const tableSkeletonStyles = {
  th: style({
    backgroundColor: "#38a169", // verde vibrante
    color: "white",
    padding: "0.75rem",
    textAlign: "left",
    borderRadius: "8px 8px 0 0",
  }),
  tr: style({
    borderBottom: "1px solid #e2e8f0",
    ":last-child": {
      borderBottom: "none",
    },
  }),
  tdSkeleton: style({
    height: "1.5rem",
    borderRadius: "4px",
    animation: `${pulse} 1.5s ease-in-out infinite`,
    backgroundColor: "#e0e0e0",
    margin: "0.5rem",
  }),
};
