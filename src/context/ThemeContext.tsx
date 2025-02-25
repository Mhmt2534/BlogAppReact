import { createContext, useState, ReactNode, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

interface ThemeContextType {
  toggleTheme: () => void;
  mode: "light" | "dark";
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // Tema oluşturma işlemi
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#1976d2" : "#90caf9",
          },
          background: {
            default: mode === "light" ? "#fff" : "#121212",
            paper: mode === "light" ? "#f5f5f5" : "#1e1e1e",
          },
          text: {
            primary: mode === "light" ? "#000" : "#fff",
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* MUI'nin tüm bileşenlerini temaya uygun hale getirir */}
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
