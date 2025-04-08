import { Box, Container, HStack, useMediaQuery } from '@chakra-ui/react';

import CulinaryBlogs from '~/components/culinary-blogs/CulinaryBlogs';
import RightAside from '~/components/layout/aside/RightAside';
import MostDelicious from '~/components/most-delicious/MostDelicious';
import NewRecipes from '~/components/new-recipes/NewRecipes';
import Search from '~/components/search/Search';
import VeganRecipes from '~/components/vegan-recipes/VeganRecipes';

const Home = () => {
    const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');

    return (
        <Box pb={{ base: '110px', md: '100px', lg: 0 }}>
            <Container maxW='container.xl' py={4} px={0} pb={{ lg: 0 }}>
                <HStack gap={6} align='stretch'>
                    {isLargerThan1440 && (
                        <Box
                            as='aside'
                            w='256px'
                            h='calc(100vh - 80px - 16px)'
                            bg='green'
                            flexShrink={0}
                        >
                            <nav>Nav</nav>
                            <Box as='footer'></Box>
                        </Box>
                    )}
                    <Box
                        maxW={{ base: '100%', lg: '880px' }}
                        h='calc(100vh - 80px - 16px)'
                        overflowY='scroll'
                    >
                        <Search title='Приятного аппетита!' />
                        <NewRecipes />
                        <MostDelicious />
                        <CulinaryBlogs />
                        <VeganRecipes />
                    </Box>
                    {isLargerThan1440 && <RightAside />}
                </HStack>
            </Container>
        </Box>
    );
};

export default Home;
