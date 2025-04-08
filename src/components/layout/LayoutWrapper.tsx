import { Container, Flex, useMediaQuery } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import Footer from '~/components/layout/Footer';
import Header from '~/components/layout/Header';

const LayoutWrapper: FC<PropsWithChildren> = ({ children }) => {
    const [isLargerThan768] = useMediaQuery('(min-width: 769px)');

    return (
        <Flex direction='column' minH='100vh'>
            <Header />
            <Flex as='main' flex='1'>
                <Container maxW='container.xl' px={{ base: 4, md: 5, lg: '10px' }}>
                    {children}
                </Container>
            </Flex>
            {!isLargerThan768 && <Footer />}
        </Flex>
    );
};
export default LayoutWrapper;
