import { Box, Container, Flex, HStack } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import Navigation from '~/components/layout/aside/Navigation';
import Sidebar from '~/components/layout/aside/Sidebar/Sidebar';
import Footer from '~/components/layout/Footer/Footer';
import FooterLeft from '~/components/layout/Footer/FooterLeft';
import Header from '~/components/layout/Header';
import { useBreakpoints } from '~/hooks/useBreakpoints';

const maxHeight = 'calc(100vh - 80px)';

const LayoutWrapper = () => {
    const { isAbove768, isMin1440 } = useBreakpoints();

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
                        {isMin1440 && (
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
                        {isMin1440 && <Sidebar />}
                    </HStack>
                </Container>
            </Flex>
            {!isAbove768 && <Footer />}
        </Flex>
    );
};
export default LayoutWrapper;
