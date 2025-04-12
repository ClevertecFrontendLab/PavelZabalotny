import { Box, Heading, Stack, Text, VStack } from '@chakra-ui/react';

import mockVeganRecipe from '~/components/mosks/veganRecipes.mock';
import VeganRecipeCardFull from '~/components/veganRecipes/VeganRecipeCardFull';
import VeganRecipeCardTrunc from '~/components/veganRecipes/VeganRecipeCardTrunc';

const VeganRecipes = () => {
    const mockVeganRecipeFull = mockVeganRecipe.slice(0, 2);
    const mockVeganRecipeTrunc = mockVeganRecipe.slice(2);

    return (
        <Box as='section' mt={8} pt={{ base: 2, lg: 6 }} borderTop='1px solid rgba(0, 0, 0, 0.08)'>
            <Stack direction={{ base: 'column', lg: 'row' }} gap={{ base: 3, lg: 7, xl: 262 }}>
                <Heading
                    as='h2'
                    fontSize={{ base: '1.5rem', lg: '2.25rem', xl: '3rem' }}
                    lineHeight={{ base: 1.33, lg: 1.11, xl: 1 }}
                    fontWeight={500}
                    w={{ base: '100%', lg: 'calc(33% - 20px)' }}
                    flexShrink={0}
                >
                    Веганская кухня
                </Heading>
                <Text
                    fontSize={{ base: '0.875rem', lg: '1rem' }}
                    fontWeight={500}
                    lineHeight={{ base: 1.43, lg: 1.5 }}
                    color='rgba(0, 0, 0, 0.64)'
                >
                    Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                    вегетарианскую диету и готовить вкусные вегетарианские блюда.
                </Text>
            </Stack>

            <Stack
                direction={['column', 'column', 'row']}
                spacing={{ base: 3, lg: 4, xl: 6 }}
                mt={{ base: 4, lg: 6 }}
            >
                {mockVeganRecipeFull.map((veganRecipe) => (
                    <VeganRecipeCardFull veganRecipe={veganRecipe} key={veganRecipe.id} />
                ))}
                <VStack
                    maxW={{ base: '100%', md: '33%', xl: '100%' }}
                    gap={{ base: '12px', md: '6px', lg: '12px' }}
                >
                    {mockVeganRecipeTrunc.map((veganRecipe) => (
                        <VeganRecipeCardTrunc veganRecipe={veganRecipe} key={veganRecipe.id} />
                    ))}
                </VStack>
            </Stack>
        </Box>
    );
};

export default VeganRecipes;
