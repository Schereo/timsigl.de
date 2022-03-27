import { Navbar, Text } from '@mantine/core';
import { NavbarLinks } from '../navbar-links/navbar-links.component';
import NavbarUser from '../navbar-user/navbar-user.component';

const GlobalNavbar = ({ opened }: { opened: boolean }) => {
    return (
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 300, lg: 400, base: 100 }}>
            <Navbar.Section>{/* Header with logo */}</Navbar.Section>
            <Navbar.Section grow mt="md">
                <NavbarLinks></NavbarLinks>
            </Navbar.Section>
            <Navbar.Section>
                <NavbarUser></NavbarUser>
            </Navbar.Section>
        </Navbar>
    );
};

export default GlobalNavbar;
