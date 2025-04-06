import { Text } from '@chakra-ui/icons';
import { Box, Heading, VStack } from '@chakra-ui/react';

import mockVeganRecipe from '~/components/vegan-recipe/mock-vegan-recipe';
import VeganRecipeCard from '~/components/vegan-recipe/VeganRecipeCard';

const VeganRecipe = () => (
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
        <VStack spacing={3} mt={4}>
            {mockVeganRecipe.map((veganRecipe, index) => (
                <VeganRecipeCard
                    veganRecipe={veganRecipe}
                    isFull={index < 2}
                    key={veganRecipe.id}
                />
            ))}
        </VStack>
    </Box>
);

export default VeganRecipe;
