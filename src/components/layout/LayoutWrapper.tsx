import { Box, Container, Flex, HStack, useMediaQuery } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import RightAside from '~/components/layout/aside/RightAside';
import Footer from '~/components/layout/footer/Footer';
import FooterLeft from '~/components/layout/footer/FooterLeft';
import Header from '~/components/layout/Header';

const maxHeight = 'calc(100vh - 80px)';

const LayoutWrapper = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 769px)');
    const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');

    return (
        <Flex direction='column' minH='100vh'>
            <Header />
            <Flex as='main' flex='1'>
                <Container
                    maxW='container.xl'
                    px={{ base: 4, md: 5, lg: '10px' }}
                    pb={{ base: '110px', md: '100px', lg: 0 }}
                >
                    <HStack gap={6} align='stretch'>
                        {/* TODO: NavBar */}
                        {isLargerThan1440 && (
                            <Box
                                as='aside'
                                w='256px'
                                h={maxHeight}
                                bg='gray.100'
                                flexShrink={0}
                                position='relative'
                            >
                                <nav>Nav</nav>
                                {/* TODO: Footer Left */}
                                <Box
                                    as='footer'
                                    position='absolute'
                                    bottom={0}
                                    p='0 24px 32px 24px'
                                >
                                    <FooterLeft />
                                </Box>
                            </Box>
                        )}
                        <Box
                            maxW={{ base: '100%', lg: '880px' }}
                            h={maxHeight}
                            pt={8}
                            overflowY='scroll'
                            css={{
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                            }}
                        >
                            <Outlet />
                        </Box>
                        {isLargerThan1440 && <RightAside />}
                    </HStack>
                </Container>
            </Flex>
            {!isLargerThan768 && <Footer />}
        </Flex>
    );
};
export default LayoutWrapper;
