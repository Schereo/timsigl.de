import { AppShell, useMantineTheme, Text } from '@mantine/core';
import { useState } from 'react';
import GlobalHeader from '../header/header.component';
import GlobalNavbar from '../navbar/navbar.component';

const Home = () => {
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
    return (
        <AppShell
            navbarOffsetBreakpoint="sm"
            fixed
            navbar={<GlobalNavbar opened={opened}></GlobalNavbar>}
            header={<GlobalHeader opened={opened} setOpened={setOpened}></GlobalHeader>}
            styles={(theme) => ({
                main: {
                  backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
              })}
        >
            <Text color={theme.colorScheme === 'dark' ? theme.colors.yellow[6] : theme.colors.dark[7]}>Hallo</Text>
        </AppShell>
    );
};

export default Home;
