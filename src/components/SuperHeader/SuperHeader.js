import { Box, Input, Link, Text } from "theme-ui";
import { IconWrapper } from "../IconWrapper/IconWrapper";
import { Search, ShoppingBag } from "react-feather";
import { Spacer } from "../Spacer/Spacer";
import React from "react";

export function SuperHeader() {
  return (
    <Box
      sx={{
        variant: "layout.superHeader",
        backgroundColor: "gray.900",
        px: 8,
        fontSize: "sm",
        color: "gray.300",
      }}
    >
      <Text as="span" sx={{ color: "white", fontWeight: "medium" }}>
        Free shipping on domestic orders over $75!
      </Text>

      <Box
        sx={{
          ml: "auto",
          width: "fit-content",
          position: "relative",
        }}
      >
        <IconWrapper
          color="inherit"
          sx={{
            position: "absolute",
          }}
        >
          <Search size={16} />
        </IconWrapper>

        <Input
          placeholder="Search..."
          sx={{
            fontSize: "sm",
            width: 200,
            border: "none",
            borderBottom: "1px solid",
            borderRadius: 0,
            p: 0,
            pb: 1,
            pl: 6,

            "&:focus": {
              outlineOffset: "3px",
              outlineColor: "inherit",
            },

            "&::placeholder": {
              color: "gray.500",
            },
          }}
        />
      </Box>

      <Spacer size={24} />

      <Link
        href="https://google.com"
        sx={{ textDecoration: "none", color: "inherit", fontWeight: "medium" }}
      >
        Help
      </Link>

      <Spacer size={24} />

      <IconWrapper color="inherit">
        <ShoppingBag />
      </IconWrapper>
    </Box>
  );
}
