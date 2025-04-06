import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, VStack } from '@chakra-ui/react';

import mockMostDelicious from '~/components/most-delicious/mock-most-delicious';
import MostDeliciousCard from '~/components/most-delicious/MostDeliciousCard';

const MostDelicious = () => (
    <Box as='section' mt={8} display='flex' flexDirection='column' justifyContent='center'>
        <Heading as='h3'>Самое сочное</Heading>
        <VStack spacing={3}>
            {mockMostDelicious.map((recipe) => (
                <MostDeliciousCard key={recipe.id} recipe={recipe} />
            ))}
        </VStack>
        <Button
            display='inline-flex'
            mt={3}
            mx='auto'
            bg='brand.green.button'
            rightIcon={<ArrowForwardIcon />}
        >
            Вся подборка
        </Button>
    </Box>
);

export default MostDelicious;
