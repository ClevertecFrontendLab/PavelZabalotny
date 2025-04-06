import { Box, Heading, HStack } from '@chakra-ui/react';

import mockNewRecipes from '~/components/new-recipes/mock-new-recipes';
import NewRecipeCard from '~/components/new-recipes/NewRecipeCard';

const NewRecipes = () => (
    <Box as='section' mt={8}>
        <Heading as='h3' fontSize='1.5rem' fontWeight={500}>
            Новые рецепты
        </Heading>
        <HStack spacing={3} overflowX='auto' py={3}>
            {mockNewRecipes.map((recipe) => (
                <NewRecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </HStack>
    </Box>
);

export default NewRecipes;
