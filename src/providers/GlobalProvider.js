import { ThemeProvider } from "theme-ui";
import { theme } from "../lib/theme-ui/theme";

export function GlobalProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
