import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? "dark" : "light";
  const handleTheme = () => {
    setIsDarkMode((theme) => !theme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("mode", theme);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
