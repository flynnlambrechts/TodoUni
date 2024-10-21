import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
export const ThemeContext = React.createContext({ toggleDarkMode: () => {} });

function ThemeModeController(props) {
    const [mode, setMode] = React.useState("dark");

    const colorMode = React.useMemo(
        () => ({
            toggleDarkMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: "#10945B",
                    },
                    secondary: {
                        main: "#CB1532",
                    },
                    success: {
                        main: "#10945B",
                    },
                    warning: {
                        main: "#D77917",
                    },
                    error: {
                        main: "#CB1532",
                    },
                },
                typography: {
                    button: {
                        textTransform: "none",
                    },
                },
            }),
        [mode]
    );

    return (
        <ThemeContext.Provider value={{ colorMode, theme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default ThemeModeController;
