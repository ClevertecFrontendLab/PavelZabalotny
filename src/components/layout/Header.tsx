import { Box, Center, Container, Flex, Link } from '@chakra-ui/react';

import { BurgerMenuIcon, LogoIcon } from '~/components/layout/icons';
import ProfileNotification from '~/components/ProfileNotification';

const Header = () => (
    <Box
        as='header'
        bg='brand.yellow'
        position={{ base: 'fixed', md: 'static' }}
        top='0'
        left='0'
        w='100%'
        zIndex={10}
        data-test-id='header'
    >
        <Container maxW='container.xl' py={4}>
            <Flex justify='space-between' align='center'>
                <Link href='/'>
                    <LogoIcon boxSize={8} color='brand.green.logo' aria-label='yee-daa-logo' />
                </Link>
                <Flex align='center'>
                    <ProfileNotification />
                    <Center boxSize={12} borderRadius={50}>
                        <BurgerMenuIcon boxSize={6} color='#000' aria-label='hamburger-menu' />
                    </Center>
                </Flex>
            </Flex>
        </Container>
    </Box>
);

export default Header;
