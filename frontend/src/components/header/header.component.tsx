import { Burger, Header, MediaQuery, useMantineColorScheme, Text, Group, ActionIcon, Image } from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';
import Logo from '../../assets/main_logo.png';

const GlobalHeader = ({ opened, setOpened }: { opened: boolean; setOpened: any }) => {
    const {colorScheme, toggleColorScheme} = useMantineColorScheme();
    return (
        <Header height={70} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o: any) => !o)}
                        size="sm"
                        mr="xl"
                    />
                </MediaQuery>
                <Group sx={{ height: '100%' }} px={20} position="apart">
                    <Image src={Logo} width={30}></Image>
                    <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                        {colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
                    </ActionIcon>
                </Group>
            </div>
        </Header>
    );
};

export default GlobalHeader;
