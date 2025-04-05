import { Container, Flex, useBreakpointValue } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import Footer from '~/components/layout/Footer';
import Header from '~/components/layout/Header';

const LayoutWrapper: FC<PropsWithChildren> = ({ children }) => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Flex direction='column' minH='100vh'>
            <Header />
            <Flex as='main' flex='1'>
                <Container maxW='container.xl' py={4}>
                    {children}
                </Container>
            </Flex>
            {isMobile && <Footer />}
        </Flex>
    );
};
export default LayoutWrapper;
