import { Box, Container, Flex, HStack, useMediaQuery } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import Navigation from '~/components/layout/aside/navigation';
import Sidebar from '~/components/layout/aside/Sidebar';
import Footer from '~/components/layout/footer/Footer';
import FooterLeft from '~/components/layout/footer/FooterLeft';
import Header from '~/components/layout/Header';

const maxHeight = 'calc(100vh - 80px)';

const LayoutWrapper = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 769px)');
    const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');

    return (
        <Flex direction='column'>
            <Header />
            <Flex as='main' flex='1' mt={{ base: '64px', lg: '80px' }}>
                <Container
                    maxW='container.xl'
                    px={{ base: 4, md: 5, lg: '10px' }}
                    pb={{ base: '110px', md: '100px', lg: 0 }}
                >
                    <HStack gap={6} align='stretch'>
                        {isLargerThan1440 && (
                            <Box as='aside' w='256px' h={maxHeight} flexShrink={0} position='fixed'>
                                <Navigation />
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
                            maxW={{ base: '100%', lg: '880px', xl: '1360px' }}
                            h={maxHeight}
                            pt={{ base: 4, lg: 8 }}
                            ml={{ base: 0, lg: '280px' }}
                            css={{
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                            }}
                        >
                            <Outlet />
                        </Box>
                        {isLargerThan1440 && <Sidebar />}
                    </HStack>
                </Container>
            </Flex>
            {!isLargerThan768 && <Footer />}
        </Flex>
    );
};
export default LayoutWrapper;
