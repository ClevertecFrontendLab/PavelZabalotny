import {
    Box,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Hide,
    Image,
    Show,
    Stack,
    Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import { NavLink } from 'react-router';

import { VeganRecipeCardProps } from '~/components/mosks/veganRecipes.mock';
import CustomProfileButton from '~/components/shared/CustomProfileButton';
import { BookmarksIcon, LikeIcon } from '~/components/shared/icons';

import { categoryInfo } from '../mosks/navigation.mock';

type NewRecipeCardProps = {
    recipe: VeganRecipeCardProps;
};

const SliderCard: FC<NewRecipeCardProps> = ({
    recipe: { category, subcategory, title, description, image, bookmarks, likes, id },
}) => {
    // TODO: Implement NavLink to recipe page
    const link = `${category[0]}/${subcategory[0]}/${id}`;

    return (
        <Card
            as={NavLink}
            to={link}
            minW={{ base: '158px', lg: '277px', xl: '322px' }}
            borderRadius={8}
            _hover={{
                boxShadow:
                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
            }}
        >
            <Hide above='lg'>
                {category.slice(0, 1).map((item) => {
                    const { title, icon } = categoryInfo[item];

                    return (
                        <Box
                            position='absolute'
                            display='flex'
                            alignItems='center'
                            bg='brand.green.category'
                            borderRadius={4}
                            padding='2px 4px'
                            top={2}
                            left={2}
                            maxW='142px'
                            key={title}
                        >
                            <Image src={icon} boxSize={4} />
                            <Text noOfLines={1} as='span' fontSize='0.875rem'>
                                {title}
                            </Text>
                        </Box>
                    );
                })}
            </Hide>
            <CardHeader p={0}>
                <Image
                    objectFit='cover'
                    src={image}
                    alt='Chakra UI'
                    borderTopRadius={8}
                    w={{ base: '158px', lg: '277px', xl: '322px' }}
                    h={{ base: '128px', lg: '230px' }}
                />
            </CardHeader>
            <Stack
                px={{ base: 2, lg: 3, xl: 6 }}
                pt={{ base: 2, lg: 3, xl: 4 }}
                pb={{ base: 1, lg: 3, xl: 5 }}
                spacing={{ base: 2, lg: 6 }}
            >
                <CardBody display='flex' flexDirection='column' gap={{ lg: 2 }} p={0}>
                    <Text
                        noOfLines={{ base: 2, lg: 1 }}
                        as='h3'
                        fontSize={{ base: '1rem', lg: '1.125rem', xl: '1.25rem' }}
                        lineHeight={{ base: 1.5, xl: 1.4 }}
                        fontWeight={500}
                    >
                        {title}
                    </Text>
                    <Show above='lg'>
                        <Text noOfLines={3} fontSize='0.875rem'>
                            {description}
                        </Text>
                    </Show>
                </CardBody>
                <CardFooter p={0} justifyContent='space-between'>
                    <Show above='lg'>
                        {category.slice(0, 1).map((item) => {
                            const { title, icon } = categoryInfo[item];

                            return (
                                <Box
                                    display='flex'
                                    alignItems='center'
                                    bg='brand.green.category'
                                    borderRadius={4}
                                    padding='2px 8px'
                                    gap={2}
                                    h={6}
                                    key={title}
                                >
                                    <Image src={icon} boxSize={4} />
                                    <Text noOfLines={1} as='span' fontSize='0.875rem'>
                                        {title}
                                    </Text>
                                </Box>
                            );
                        })}
                    </Show>
                    <ButtonGroup gap={2} minH={6}>
                        <CustomProfileButton
                            leftIcon={<BookmarksIcon />}
                            text={bookmarks}
                            textColor='brand.green.profile'
                        />
                        <CustomProfileButton
                            leftIcon={<LikeIcon />}
                            text={likes}
                            textColor='brand.green.profile'
                        />
                    </ButtonGroup>
                </CardFooter>
            </Stack>
        </Card>
    );
};

export default SliderCard;
