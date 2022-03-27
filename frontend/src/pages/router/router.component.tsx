import { AppShell, useMantineTheme, Text } from '@mantine/core';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalHeader from '../../components/header/header.component';
import GlobalNavbar from '../../components/navbar/navbar.component';
import Identity from '../../pages/identity/identity.component';
import Home from '../../pages/home/home.component';

const Router = () => {
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
    return (
        <BrowserRouter>
            <AppShell
                navbarOffsetBreakpoint="sm"
                
                navbar={<GlobalNavbar opened={opened}></GlobalNavbar>}
                header={<GlobalHeader opened={opened} setOpened={setOpened}></GlobalHeader>}
                styles={(theme) => ({
                    main: {
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
                    }
                })}
            >
                <Routes>
                    <Route path="/" element={<Home></Home>} />
                    <Route path="/identity" element={<Identity></Identity>} />
                </Routes>
            </AppShell>
        </BrowserRouter>
    );
};

export default Router;
