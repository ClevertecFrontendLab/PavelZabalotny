import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Image,
    Link,
    Stack,
    Text,
} from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router';

import { Category, navigation } from '~/components/mosks/navigation.mock';

const Navigation = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (category: Category) => {
        if (category.subCategories?.length > 0) {
            navigate('vegan-cuisine');
        }
    };

    return (
        <Box
            mt={6}
            pt={4}
            pr={4}
            height='calc(100vh - 250px - 25px)'
            overflowY='auto'
            fontSize='1rem'
            fontWeight={500}
            lineHeight={1.5}
            _hover={{
                boxShadow: '0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
            }}
            css={{
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                    width: '8px',
                    background: 'rgba(0, 0, 0, 0.04)',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'rgba(0, 0, 0, 0.16)',
                    borderRadius: '8px',
                },
                scrollbarGutter: 'stable',
            }}
        >
            <Accordion allowToggle>
                {navigation.map((category) => (
                    <AccordionItem key={category.id} border='none'>
                        <AccordionButton
                            px={3}
                            py={2}
                            _expanded={{ background: 'brand.navi', fontWeight: 700 }}
                            data-test-id={category.id === 'vegan' ? 'vegan-cuisine' : null}
                            onClick={() => handleCategoryClick(category)}
                        >
                            <Flex align='center' flex='1' textAlign='left' gap={3}>
                                <Image src={category.icon} boxSize={6} />
                                <Text fontSize='md'>{category.name}</Text>
                            </Flex>
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel p={0}>
                            <Stack spacing={1} position='relative'>
                                {category.subCategories.map((subCategory) => (
                                    <Link
                                        as={NavLink}
                                        key={subCategory.id}
                                        to='/vegan-cuisine'
                                        p='6px 0px 6px 44px'
                                        display='inline-flex'
                                        verticalAlign='middle'
                                        _activeLink={{
                                            fontWeight: 700,
                                        }}
                                        sx={{
                                            '&:hover, &[data-hover]': {
                                                textDecoration: 'none',
                                            },
                                        }}
                                    >
                                        <Box
                                            as='span'
                                            display='inline-flex'
                                            w='11px'
                                            h='24px'
                                            borderRight='1px solid #c4ff61'
                                            position='relative'
                                            left='-11px'
                                            sx={{
                                                '[aria-current="page"] > &': {
                                                    borderRightWidth: '11px',
                                                },
                                            }}
                                        ></Box>
                                        {subCategory.name}
                                    </Link>
                                ))}
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Box>
    );
};

export default Navigation;
