import { Box, Container } from '@chakra-ui/react';

import CulinaryBlogs from '~/components/culinary-blogs/CulinaryBlogs';
import MostDelicious from '~/components/most-delicious/MostDelicious';
import NewRecipes from '~/components/new-recipes/NewRecipes';
import Search from '~/components/Search';
import VeganRecipe from '~/components/vegan-recipe/VeganRecipe';

const Home = () => (
    <Box as='main' pt={{ base: 16, md: 4 }} pb={{ base: 84, md: 4 }}>
        <Container maxW='container.xl' py={4} px={0}>
            <Search title='Приятного аппетита!' />
            <NewRecipes />
            <MostDelicious />
            <CulinaryBlogs />
            <VeganRecipe />
        </Container>
    </Box>
);

export default Home;
