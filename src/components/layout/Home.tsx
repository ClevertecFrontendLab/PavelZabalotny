import { Box, Container, useMediaQuery } from '@chakra-ui/react';

import CulinaryBlogs from '~/components/culinary-blogs/CulinaryBlogs';
import MostDelicious from '~/components/most-delicious/MostDelicious';
import NewRecipes from '~/components/new-recipes/NewRecipes';
import Search from '~/components/search/Search';
import VeganRecipes from '~/components/vegan-recipe/VeganRecipes';

const Home = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 769px)');

    return (
        <Box pb={isLargerThan768 ? '16px' : '100px'}>
            <Container maxW='container.xl' py={4} px={0}>
                <Search title='Приятного аппетита!' />
                <NewRecipes />
                <MostDelicious />
                <CulinaryBlogs />
                <VeganRecipes />
            </Container>
        </Box>
    );
};

export default Home;
