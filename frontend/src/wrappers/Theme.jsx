import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
export const ThemeContext = React.createContext({ toggleDarkMode: () => { } });

function ThemeModeController(props) {
    const [mode, setMode] = React.useState('dark');

    const colorMode = React.useMemo(
        () => ({
            toggleDarkMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: '#00ff16',
                    },
                    secondary: {
                        main: '#f50057',
                    },
                },
            }),
        [mode],
    );

    return (<ThemeContext.Provider value={{ colorMode, theme }}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    </ThemeContext.Provider>
    );
}

export default ThemeModeController;
