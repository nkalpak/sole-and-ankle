import React from "react";
import { Box } from "theme-ui";
import { SuperHeader } from "../SuperHeader/SuperHeader";
import { Header } from "../Header/Header";

const App = () => {
  return (
    <Box
      sx={{
        variant: "layout.root",
      }}
    >
      <SuperHeader />
      <Header />

      <Box as="main" sx={{ variant: "layout.main", backgroundColor: "white" }}>
        <h1>Hello there</h1>
        <p>I am a paragraph, I should be styled</p>
        <a href="https://google.com">Link to Google</a>
      </Box>
    </Box>
  );
};

export default App;
