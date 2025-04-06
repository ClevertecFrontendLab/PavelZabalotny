import { Text } from '@chakra-ui/icons';
import { Box, Heading, Stack, VStack } from '@chakra-ui/react';

import mockVeganRecipe from '~/components/vegan-recipe/mock-vegan-recipes';
import VeganRecipeCardFull from '~/components/vegan-recipe/VeganRecipeCardFull';
import VeganRecipeCardTrunc from '~/components/vegan-recipe/VeganRecipeCardTrunc';

const VeganRecipes = () => {
    const mockVeganRecipeFull = mockVeganRecipe.slice(0, 2);
    const mockVeganRecipeTrunc = mockVeganRecipe.slice(2);

    return (
        <Box as='section' mt={8} pt={2} borderTop='1px solid rgba(0, 0, 0, 0.08)'>
            <Heading as='h2' fontSize='1.5rem' fontWeight={500}>
                Веганская кухня
            </Heading>
            <Text
                mt={3}
                fontSize='0.875rem'
                fontWeight={500}
                lineHeight={1.43}
                color='rgba(0, 0, 0, 0.64)'
            >
                Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                вегетарианскую диету и готовить вкусные вегетарианские блюда.
            </Text>
            <Stack direction={['column', 'column', 'row']} spacing={3} mt={4}>
                {mockVeganRecipeFull.map((veganRecipe) => (
                    <VeganRecipeCardFull veganRecipe={veganRecipe} key={veganRecipe.id} />
                ))}
                <VStack maxW={{ base: '100%', md: '33%' }}>
                    {mockVeganRecipeTrunc.map((veganRecipe) => (
                        <VeganRecipeCardTrunc veganRecipe={veganRecipe} key={veganRecipe.id} />
                    ))}
                </VStack>
            </Stack>
        </Box>
    );
};

export default VeganRecipes;
