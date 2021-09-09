import React from "react";
import { Box } from "theme-ui";
import { SuperHeader } from "../SuperHeader/SuperHeader";
import { Header } from "../Header/Header";
import { BreadcrumbsRouter } from "../Breadcrumbs/BreadcrumbsRouter";

function App() {
  return (
    <Box
      sx={{
        variant: "layout.root",
      }}
    >
      <SuperHeader />
      <Header />

      <Box as="main" sx={{ variant: "layout.main", backgroundColor: "white" }}>
        <BreadcrumbsRouter />
      </Box>
    </Box>
  );
}

export default App;
