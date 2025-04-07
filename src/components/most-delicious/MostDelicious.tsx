import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, HStack, Stack, useMediaQuery } from '@chakra-ui/react';

import mockMostDelicious from '~/components/most-delicious/mock-most-delicious';
import MostDeliciousCard from '~/components/most-delicious/MostDeliciousCard';

const MostDelicious = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 769px)');

    return (
        <Box
            as='section'
            mt={8}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            gap={3}
        >
            <HStack justifyContent='space-between'>
                <Heading
                    as='h3'
                    fontSize={{ base: '1.5rem', lg: '2.25rem' }}
                    lineHeight={{ base: '1.33', lg: '1.11' }}
                    fontWeight={500}
                >
                    Самое сочное
                </Heading>
                <Button
                    display={isLargerThan768 ? 'inline-flex' : 'none'}
                    bg='brand.green.button'
                    rightIcon={<ArrowForwardIcon />}
                    data-test-id={isLargerThan768 ? 'juiciest-link' : null}
                >
                    Вся подборка
                </Button>
            </HStack>

            <Stack
                spacing={3}
                direction={{ base: 'column', md: 'row', lg: 'column' }}
                flexWrap={{ base: 'nowrap', md: 'wrap' }}
                align='center'
            >
                {mockMostDelicious.map((recipe) => (
                    <MostDeliciousCard key={recipe.id} recipe={recipe} />
                ))}
            </Stack>
            <Button
                display={isLargerThan768 ? 'none' : 'inline-flex'}
                mt={3}
                mx='auto'
                bg='brand.green.button'
                rightIcon={<ArrowForwardIcon />}
                data-test-id={isLargerThan768 ? null : 'juiciest-link-mobile'}
            >
                Вся подборка
            </Button>
        </Box>
    );
};
export default MostDelicious;
