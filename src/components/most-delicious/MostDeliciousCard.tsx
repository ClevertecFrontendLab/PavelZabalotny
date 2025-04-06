import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardHeader,
    Center,
    Heading,
    Image,
} from '@chakra-ui/react';

import CustomProfileButton from '~/components/CustomProfileButton';
import { BookmarksIcon, LikeIcon } from '~/components/layout/icons';
import { RecipeProps } from '~/components/new-recipes/NewRecipeCard';

const MostDeliciousCard = ({
    recipe: { category, icons, title, image },
}: {
    recipe: RecipeProps;
}) => (
    <Card
        display='flex'
        flexDirection='row'
        maxH={32}
        w='100%'
        flex={{ base: 'none', md: '1 1 calc(50% - 12px)' }}
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
    >
        <CardHeader p={0}>
            <Box
                position='absolute'
                display='flex'
                alignItems='center'
                bg='brand.green.category'
                borderRadius={4}
                padding='2px 4px'
                top={2}
                left={2}
            >
                <Image src={category.icon} boxSize={4} />
                <Box as='span' fontSize='0.875rem'>
                    {category.text}
                </Box>
            </Box>
            <Image src={image} alt='Chakra UI' borderLeftRadius={8} maxH={32} />
        </CardHeader>
        <CardBody
            pt={0}
            px={2}
            pb={1}
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
        >
            <Box>
                <ButtonGroup gap={2} p={1} mt={2}>
                    {icons.map(({ leftIcon, text }, i) => (
                        <CustomProfileButton
                            leftIcon={leftIcon === 'bookmarks' ? <BookmarksIcon /> : <LikeIcon />}
                            text={text}
                            key={i}
                            textColor='brand.green.profile'
                        />
                    ))}
                </ButtonGroup>
                <Heading as='h3' fontSize='1rem' lineHeight={1.5}>
                    {title}
                </Heading>
            </Box>

            <Box
                display='flex'
                flexDirection='row'
                alignItems='center'
                justifyContent='end'
                gap={4}
            >
                <Center boxSize={6} border='1px solid rgba(0, 0, 0, 0.48)' borderRadius={6}>
                    <BookmarksIcon boxSize={3} />
                </Center>
                <Button maxH={6} bg='#000' color='#fff' fontSize='0.75rem' fontWeight={600} px={2}>
                    Готовить
                </Button>
            </Box>
        </CardBody>
    </Card>
);

export default MostDeliciousCard;
