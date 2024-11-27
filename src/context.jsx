import { createContext, useContext, useState, useEffect } from "react";
//1. create context

const AppContext = createContext();

const getInitialDarkMode = () => {
  const userPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme") === "true";
  return userPrefersDark || storedDarkMode;
};
function AppProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchQuery, setSearchQuery] = useState("mosque");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    // const body = document.querySelector("body");
    // body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);
  //2. provide values
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchQuery, setSearchQuery }}
    >
      {children}
    </AppContext.Provider>
  );
}

//3.make a useCustom hook of consumer
function useGlobalContext() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("appContext was used outside of the appProvider");

  return context;
}

export { AppProvider, useGlobalContext };
