import { Box } from "theme-ui";
import { SoleAndAnkleLogo } from "../SoleAndAnkleLogo/SoleAndAnkleLogo";
import { NavLink } from "../NavLink/NavLink";
import React from "react";

export function Header() {
  return (
    <Box
      as="header"
      sx={{
        variant: "layout.header",
        backgroundColor: "white",
        borderBottom: "1px solid",
        borderColor: "gray.300",
        display: "flex",
        alignItems: "center",
      }}
    >
      <SoleAndAnkleLogo />

      <Box
        sx={{
          mx: "auto",
          "& > :not(:first-of-type)": {
            ml: 10,
          },
        }}
      >
        <NavLink to="/sale">Sale</NavLink>
        <NavLink to="/new-releases">New Releases</NavLink>
        <NavLink to="/men">Men</NavLink>
        <NavLink to="/women">Women</NavLink>
        <NavLink to="/kids">Kids</NavLink>
        <NavLink to="/collections">Collections</NavLink>
      </Box>
    </Box>
  );
}
