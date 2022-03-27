import React from 'react';
import { Ghost, Home } from 'tabler-icons-react';
import { Link } from 'react-router-dom';
import { ThemeIcon, UnstyledButton, Group, Text, MediaQuery, Center } from '@mantine/core';

interface NavbarLinkProps {
    icon: React.ReactNode;
    color: string;
    label: string;
    url: string;
}

const NavbarLink = ({ icon, color, label, url }: NavbarLinkProps) => {
    return (
        <Link to={url}>
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
                    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                        <Text size="sm">{label}</Text>
                    </MediaQuery>
            
                </Group>
            </UnstyledButton>
        </Link>
    );
};

const data = [
    { icon: <Home size={16} />, color: 'teal', label: 'Home', url: '/' },
    { icon: <Ghost size={16} />, color: 'blue', label: 'Identity', url: 'identity' }
];

export function NavbarLinks() {
    const links = data.map((link) => <NavbarLink {...link} key={link.label} />);
    return <div>{links}</div>;
}
