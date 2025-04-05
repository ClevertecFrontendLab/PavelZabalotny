import { Box, Heading, HStack } from '@chakra-ui/react';

import mockRecipes from '~/components/new-recipes/mock-recipes';
import RecipeCard from '~/components/new-recipes/RecipeCard';

const NewRecipes = () => (
    <Box as='section' mt={8}>
        <Heading as='h3'>Новые рецепты</Heading>
        <HStack spacing={3} overflowX='auto' py={3}>
            {mockRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </HStack>
    </Box>
);

export default NewRecipes;
