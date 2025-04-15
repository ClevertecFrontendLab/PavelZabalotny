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
    Text,
} from '@chakra-ui/react';

import CustomProfileButton from '~/components/shared/CustomProfileButton';

import { BookmarksIcon, LikeIcon } from '../shared/icons';

export interface RecipeProps {
    id: string;
    category: {
        icon: string;
        text: string;
    };
    image: string;
    title: string;
    description: string;
    icons: { leftIcon: 'bookmarks' | 'like'; text: string }[];
}

const NewRecipeCard = ({
    recipe: { category, icons, title, description, image },
}: {
    recipe: RecipeProps;
}) => (
    <Card
        minW={{ base: '158px', lg: '277px', xl: '322px' }}
        borderRadius={8}
        pb={{ lg: 3 }}
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
    >
        <Hide above='lg'>
            {category.icon && (
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
                >
                    <Image src={category.icon} boxSize={4} />
                    <Text isTruncated as='span' fontSize='0.875rem'>
                        {category.text}
                    </Text>
                </Box>
            )}
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
        <CardBody p={{ base: 2, lg: 3 }}>
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
        <CardFooter py={0} p={2} mt={{ lg: 3 }} justifyContent='space-between'>
            <Show above='lg'>
                {category.icon && (
                    <Box
                        display='flex'
                        alignItems='center'
                        bg='brand.green.category'
                        borderRadius={4}
                        padding='2px 8px'
                        gap={2}
                        h={6}
                    >
                        <Image src={category.icon} boxSize={4} />
                        <Text isTruncated as='span' fontSize='0.875rem'>
                            {category.text}
                        </Text>
                    </Box>
                )}
            </Show>
            <ButtonGroup gap={2} p={1}>
                {icons.map(({ leftIcon, text }, i) => (
                    <CustomProfileButton
                        leftIcon={
                            leftIcon === 'bookmarks' ? (
                                <BookmarksIcon boxSize={3} />
                            ) : (
                                <LikeIcon boxSize={3} />
                            )
                        }
                        text={text}
                        key={i}
                        textColor='brand.green.profile'
                        fontSize='0.75rem'
                    />
                ))}
            </ButtonGroup>
        </CardFooter>
    </Card>
);

export default NewRecipeCard;
