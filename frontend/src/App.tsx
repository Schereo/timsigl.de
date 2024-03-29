import React, { useState } from 'react';
import Router from './pages/router/router.component';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';

function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }}>
                <Router></Router>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;
