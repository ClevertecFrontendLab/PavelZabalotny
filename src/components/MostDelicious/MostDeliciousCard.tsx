import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardHeader,
    Center,
    HStack,
    Image,
    Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import { NavLink } from 'react-router';

import { categoryInfo } from '~/components/mosks/navigation.mock';
import { VeganRecipeCardProps } from '~/components/mosks/veganRecipes.mock';
import CustomProfileButton from '~/components/shared/CustomProfileButton';

import { BookmarksIcon, LikeIcon } from '../shared/icons';

type MostDeliciousCardProps = {
    recipe: VeganRecipeCardProps;
};

const MostDeliciousCard: FC<MostDeliciousCardProps> = ({
    recipe: {
        title,
        description,
        image,
        category,
        subcategory,
        id,
        recommendedBy,
        bookmarks,
        likes,
    },
}) => (
    <Card
        data-test-id={`food-card-${id}`}
        display='flex'
        flexDirection='row'
        w='100%'
        flex={{ base: 'none', md: '1 1 calc(50% - 12px)', xl: '1 1 calc(50% - 20px)' }}
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
    >
        <CardHeader p={0} flexShrink={0}>
            {recommendedBy && (
                <Box
                    position='absolute'
                    display={{ base: 'none', lg: 'flex' }}
                    alignItems='center'
                    bg='brand.green.category'
                    borderRadius={4}
                    padding='2px 4px'
                    bottom={5}
                    left={6}
                    gap={2}
                >
                    <Image src={recommendedBy?.avatar} boxSize={4} />
                    <Box as='span' fontSize='0.875rem'>
                        {recommendedBy?.userName} рекомендует
                    </Box>
                </Box>
            )}
            <Image
                src={image}
                alt='Chakra UI'
                borderLeftRadius={8}
                w={{ base: '158px', lg: '346px' }}
                h={{ base: '128px', lg: '244px' }}
                objectFit='fill'
            />
        </CardHeader>
        <CardBody
            px={{ base: 2, lg: 6 }}
            py={{ base: 2, lg: 5 }}
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            maxW={{ xl: '322px' }}
        >
            <Box>
                <HStack justifyContent='space-between'>
                    {category.slice(0, 1).map((item) => {
                        const { title, icon } = categoryInfo[item];

                        return (
                            <Box
                                display={{ base: 'none', lg: 'flex' }}
                                alignItems='center'
                                bg='brand.yellow'
                                borderRadius={4}
                                padding='2px 4px'
                                gap={2}
                                key={title}
                            >
                                <Image src={icon} boxSize={4} />
                                <Text noOfLines={1} as='span' fontSize='0.875rem'>
                                    {title}
                                </Text>
                            </Box>
                        );
                    })}
                    <ButtonGroup gap={2} p={1}>
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
                </HStack>

                <Text
                    noOfLines={{ base: 2, lg: 1 }}
                    as='h3'
                    fontSize={{ base: '1rem', lg: '1.25rem' }}
                    lineHeight={{ base: 1.5, lg: 1.4 }}
                    mt={{ base: 0, lg: 6 }}
                >
                    {title}
                </Text>
                <Text
                    noOfLines={3}
                    display={{ base: 'none', lg: '-webkit-box' }}
                    fontWeight={400}
                    fontSize='0.875rem'
                    mt={2}
                >
                    {description}
                </Text>
            </Box>

            <Box
                display='flex'
                flexDirection='row'
                alignItems='center'
                justifyContent='end'
                gap={4}
            >
                <Center
                    w={{ base: 6, lg: 'auto' }}
                    h={{ base: 6, lg: '100%' }}
                    border='1px solid rgba(0, 0, 0, 0.48)'
                    borderRadius={6}
                    px={{ base: 0, lg: 3 }}
                    gap={2}
                    fontSize='0.875rem'
                    lineHeight={1.44}
                    fontWeight={600}
                >
                    <BookmarksIcon boxSize={3} />
                    <Box as='span' display={{ base: 'none', lg: 'inline' }}>
                        Сохранить
                    </Box>
                </Center>
                <Button
                    data-test-id={`card-link-${id}`}
                    as={NavLink}
                    to={`/${category[0]}/${subcategory[0]}/${id}`}
                    maxH={{ base: 6, lg: 8 }}
                    bg='#000'
                    color='#fff'
                    fontSize={{ base: '0.75rem', lg: '0.875rem' }}
                    fontWeight={600}
                    px={{ base: 2, lg: 3 }}
                    border='1px solid rgba(0, 0, 0, 0.08)'
                    lineHeight={{ base: 1.33, lg: 1.44 }}
                >
                    Готовить
                </Button>
            </Box>
        </CardBody>
    </Card>
);

export default MostDeliciousCard;
