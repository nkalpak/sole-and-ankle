import { ThemeProvider } from "theme-ui";
import { BrowserRouter } from "react-router-dom";
import { theme } from "../lib/theme-ui/theme";

export function GlobalProvider({ children }) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  );
}
