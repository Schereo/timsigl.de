import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/home.component';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';

function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }}>
                <Home></Home>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;
