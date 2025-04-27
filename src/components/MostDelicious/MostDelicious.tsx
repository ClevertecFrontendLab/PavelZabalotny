import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, HStack, Stack } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router';

import { veganRecipes } from '~/components/mosks/veganRecipes.mock';
import { useBreakpoints } from '~/hooks/useBreakpoints';

import type { CategoryId } from '../mosks/navigation.mock';
import MostDeliciousCard from './MostDeliciousCard';

interface MostDeliciousProps {
    maxItems: number;
}

const MostDelicious: FC<MostDeliciousProps> = ({ maxItems }) => {
    const { isAbove768 } = useBreakpoints();
    // TODO: Filter by category && subcategory
    const location = useLocation();
    const pathName = location.pathname;
    const pathNames = pathName.split('/').filter(Boolean);
    console.log(pathName);

    const filteredRecipes = veganRecipes.filter(
        (recipe) =>
            recipe.category.includes(pathNames[0] as CategoryId) ||
            recipe.subcategory.includes(pathNames[1] as CategoryId),
    );

    const sortedFilteredRecipes = filteredRecipes.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    const topRecipes = useMemo(() => {
        const copy = [...veganRecipes];
        copy.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        return copy.slice(0, maxItems);
    }, [maxItems]);

    return (
        <Box
            as='section'
            mt={8}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            gap={{ base: 3, lg: 4, xl: 5 }}
        >
            <HStack justifyContent='space-between'>
                <Heading
                    as='h3'
                    fontSize={{ base: '1.5rem', lg: '2.25rem', xl: '3rem' }}
                    lineHeight={{ base: 1.33, lg: 1.11, xl: 1 }}
                    fontWeight={500}
                >
                    Самое сочное
                </Heading>
                <Button
                    as={NavLink}
                    to='/most-delicious'
                    display={isAbove768 ? 'inline-flex' : 'none'}
                    bg='brand.green.button'
                    rightIcon={<ArrowForwardIcon />}
                    data-test-id={isAbove768 ? 'juiciest-link' : null}
                >
                    Вся подборка
                </Button>
            </HStack>

            <Stack
                spacing={{ base: 3, xl: 6 }}
                direction={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
                flexWrap={{ base: 'nowrap', md: 'wrap' }}
                align='center'
            >
                {pathNames[0] === 'most-delicious' || pathName === '/'
                    ? topRecipes.map((recipe) => (
                          <MostDeliciousCard key={recipe.id} recipe={recipe} />
                      ))
                    : sortedFilteredRecipes.map((recipe) => (
                          <MostDeliciousCard key={recipe.id} recipe={recipe} />
                      ))}
            </Stack>
            <Button
                as={NavLink}
                to='/most-delicious'
                display={isAbove768 ? 'none' : 'inline-flex'}
                mt={3}
                mx='auto'
                bg='brand.green.button'
                rightIcon={<ArrowForwardIcon />}
                data-test-id='juiciest-link-mobile'
                visibility={isAbove768 ? 'hidden' : 'visible'}
            >
                Вся подборка
            </Button>
        </Box>
    );
};
export default MostDelicious;
