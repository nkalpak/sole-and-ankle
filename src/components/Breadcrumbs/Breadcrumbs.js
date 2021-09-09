import { Flex } from "theme-ui";
import React from "react";
import { Link } from "../Link/Link";
import { darken } from "@theme-ui/color";

export function Breadcrumbs({ children }) {
  return (
    <Flex
      sx={{
        alignItems: "baseline",

        "& > *:not(:last-of-type)": {
          "&::after": {
            content: '""',
            borderRight: "0.1em solid",
            borderColor: "gray.300",
            transform: "rotate(45deg) translateY(2px)",
            display: "inline-block",
            height: "1em",
            mx: 4,
          },
        },
      }}
    >
      {children}
    </Flex>
  );
}

Breadcrumbs.Crumb = function (props) {
  return (
    <Link
      {...props}
      sx={{
        textTransform: "capitalize",
        color: "gray.700",
        fontSize: "md",
        fontWeight: "medium",
        textDecoration: "none",

        "&:hover": {
          color: darken("gray.700", 0.35),
        },
      }}
    >
      {props.children}
    </Link>
  );
};
