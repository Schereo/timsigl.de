import { useMantineTheme, Text } from "@mantine/core";

const Identity = () => {
    const theme = useMantineTheme();
    return (
        <Text color={theme.colorScheme === 'dark' ? theme.colors.yellow[6] : theme.colors.dark[7]}>Identity</Text>
    )
}

export default Identity;