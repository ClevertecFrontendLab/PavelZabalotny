import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Heading, HStack, Show } from '@chakra-ui/react';

import newRecipes from '~/components/mosks/newRecipes.mock';
import NewRecipeCard from '~/components/newRecipes/NewRecipeCard';
import SliderButton from '~/components/SliderButton';

const NewRecipes = () => (
    <Box as='section' mt={8} position='relative' overflow='hidden'>
        <Heading
            as='h3'
            fontSize={{ base: '1.5rem', lg: '2.25rem' }}
            fontWeight={500}
            lineHeight={{ base: 1.33, lg: 1.11 }}
        >
            Новые рецепты
        </Heading>

        <HStack
            spacing={3}
            position='relative'
            overflowX='auto'
            py={3}
            alignItems='stretch'
            css={{
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
            }}
        >
            {newRecipes.map((recipe) => (
                <NewRecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </HStack>
        <Show above='lg'>
            <SliderButton icon={<ArrowBackIcon color='brand.yellow' boxSize={4} />} left={-2} />
            <SliderButton icon={<ArrowForwardIcon color='brand.yellow' boxSize={4} />} right={-2} />
        </Show>
    </Box>
);

export default NewRecipes;
