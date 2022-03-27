import { Text, useMantineTheme } from "@mantine/core"

const Home = () => {
    const theme = useMantineTheme();
    return (
        <Text color={theme.colorScheme === 'dark' ? theme.colors.yellow[6] : theme.colors.dark[7]}>Home</Text>
    )
}

export default Home;