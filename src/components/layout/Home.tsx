import { Box, Container } from '@chakra-ui/react';

import Search from '~/components/Search';

const description =
    'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.';

const Home = () => (
    <Box as='main' pt={{ base: 16, md: 4 }} pb={{ base: 84, md: 4 }}>
        <Container maxW='container.xl' py={4}>
            <Search title='Приятного аппетита!' description={description} />
        </Container>
    </Box>
);

export default Home;
