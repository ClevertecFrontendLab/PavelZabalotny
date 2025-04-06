import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, Stack } from '@chakra-ui/react';

import mockMostDelicious from '~/components/most-delicious/mock-most-delicious';
import MostDeliciousCard from '~/components/most-delicious/MostDeliciousCard';

const MostDelicious = () => (
    <Box as='section' mt={8} display='flex' flexDirection='column' justifyContent='center' gap={3}>
        <Heading as='h3' fontSize='1.5rem' fontWeight={500}>
            Самое сочное
        </Heading>
        <Stack
            spacing={3}
            direction={{ base: 'column', md: 'row' }}
            flexWrap={{ base: 'nowrap', md: 'wrap' }}
            align='center'
            // justifyContent='center'
        >
            {mockMostDelicious.map((recipe) => (
                <MostDeliciousCard key={recipe.id} recipe={recipe} />
            ))}
        </Stack>
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
