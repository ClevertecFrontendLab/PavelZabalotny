import { Box, Center, Container, Flex, Image, Link, useMediaQuery } from '@chakra-ui/react';

import { BurgerMenuIcon, LogoIcon } from '~/components/layout/icons';
import ProfileNotification from '~/components/ProfileNotification';

const Header = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 769px)');
    const [is768AndLarge] = useMediaQuery('(min-width: 768px)');

    return (
        <Box
            as='header'
            bg='brand.yellow'
            position={!isLargerThan768 ? 'fixed' : 'static'}
            top='0'
            left='0'
            w='100%'
            zIndex={10}
            data-test-id='header'
        >
            <Container maxW='container.xl' py={4}>
                <Flex justify='space-between' align='center'>
                    <Link href='/' display='inline-flex' gap={2}>
                        <LogoIcon boxSize={8} color='brand.green.logo' aria-label='yee-daa-logo' />
                        {is768AndLarge && (
                            <Image src='src/assets/icons/yee-daa.svg' aria-label='yee-daa-logo' />
                        )}
                    </Link>
                    <Flex align='center'>
                        <ProfileNotification />
                        <Center>
                            <BurgerMenuIcon boxSize={6} color='#000' aria-label='hamburger-menu' />
                        </Center>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
};

export default Header;
