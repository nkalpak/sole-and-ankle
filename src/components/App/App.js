import React from "react";
import * as R from "remeda";
import * as ReactRouter from "react-router-dom";
import { SuperHeader } from "../SuperHeader/SuperHeader";
import { Header } from "../Header/Header";
import { BreadcrumbsRouter } from "../Breadcrumbs/BreadcrumbsRouter";
import { Main } from "../semantic-html/Main/Main";
import { Aside } from "../semantic-html/Aside/Aside";
import { Box, Text } from "theme-ui";
import { Nav } from "../semantic-html/Nav/Nav";
import { Section } from "../semantic-html/Section/Section";
import { RelativeNavLink } from "../NavLink/RelativeNavLink";
import { ShoeGrid } from "../../features/home/components/ShoeGrid";

function App() {
  const location = ReactRouter.useLocation();

  return (
    <Box
      sx={{
        variant: "layout.root",
      }}
    >
      <SuperHeader />
      <Header />

      <Main
        sx={{
          variant: "layout.main",
          backgroundColor: "white",
          py: 70,
          display: "flex",
        }}
      >
        <ReactRouter.Switch>
          <ReactRouter.Route path="/home">
            <Aside sx={{ flex: "0 1 250px", mr: 8 }}>
              <BreadcrumbsRouter />

              <Nav
                variant="layout.content"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",

                  "& > *:not(:first-child)": {
                    mt: 4,
                  },
                }}
              >
                <AsideNavLink to="lifestyle">Lifestyle</AsideNavLink>
                <AsideNavLink to="jordan">Jordan</AsideNavLink>
                <AsideNavLink to="running">Running</AsideNavLink>
                <AsideNavLink to="basketball">Basketball</AsideNavLink>
                <AsideNavLink to="training-gym">Training & Gym</AsideNavLink>
                <AsideNavLink to="football">Football</AsideNavLink>
                <AsideNavLink to="skateboarding">Skateboarding</AsideNavLink>
                <AsideNavLink to="american-football">
                  American Football
                </AsideNavLink>
                <AsideNavLink to="baseball">Baseball</AsideNavLink>
                <AsideNavLink to="golf">Golf</AsideNavLink>
                <AsideNavLink to="tennis">Tennis</AsideNavLink>
                <AsideNavLink to="athletics">Athletics</AsideNavLink>
                <AsideNavLink to="walking">Walking</AsideNavLink>
              </Nav>
            </Aside>

            <Section sx={{ flex: 1 }}>
              <Text as="h2" sx={{ textTransform: "capitalize" }}>
                {R.last(location.pathname.split("/"))}
              </Text>

              <Box variant="layout.content">
                <ShoeGrid />
              </Box>
            </Section>
          </ReactRouter.Route>

          <ReactRouter.Redirect to="/home" />
        </ReactRouter.Switch>
      </Main>
    </Box>
  );
}

function AsideNavLink(props) {
  return (
    <RelativeNavLink {...props} variant="sidenav">
      {props.children}
    </RelativeNavLink>
  );
}

export default App;
