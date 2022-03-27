import React from 'react';
import { Ghost } from 'tabler-icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';

interface NavbarLinkProps {
    icon: React.ReactNode;
    color: string;
    label: string;
}

const NavbarLink = ({ icon, color, label }: NavbarLinkProps) => {
    return (
        <UnstyledButton
            sx={(theme) => ({
                display: 'block',
                width: '100%',
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

                '&:hover': {
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
                }
            })}
        >
            <Group>
                <ThemeIcon color={color} variant="light">
                    {icon}
                </ThemeIcon>

                <Text size="sm">{label}</Text>
            </Group>
        </UnstyledButton>
    );
};

const data = [{ icon: <Ghost size={16} />, color: 'blue', label: 'Identity' }];

export function NavbarLinks() {
    const links = data.map((link) => <NavbarLink {...link} key={link.label} />);
    return <div>{links}</div>;
}
