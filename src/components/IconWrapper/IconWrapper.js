import { Box } from "theme-ui";

export function IconWrapper({ children, color, sx }) {
  return (
    <Box
      sx={{
        display: "inline-flex",

        "& svg": {
          color,
        },

        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
