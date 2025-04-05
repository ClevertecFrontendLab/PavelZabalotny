import { Box, Container } from '@chakra-ui/react';

import FooterProfile from '~/components/FooterProfile';

const Footer = () => (
    <Box
        as='footer'
        bg='brand.yellow'
        position={{ base: 'fixed', md: 'static' }}
        bottom='0'
        left='0'
        w='100%'
        zIndex={10}
        data-test-id='footer'
    >
        <Container maxW='container.xl' px={0}>
            <FooterProfile />
        </Container>
    </Box>
);

export default Footer;
