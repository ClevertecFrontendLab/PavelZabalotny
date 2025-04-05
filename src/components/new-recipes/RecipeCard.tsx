import {
    Box,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Image,
} from '@chakra-ui/react';

import CustomProfileButton from '~/components/CustomProfileButton';
import { BookmarksIcon, LikeIcon } from '~/components/layout/icons';

export interface RecipeProps {
    id: string;
    category: {
        icon: string;
        text: string;
    };
    image: string;
    title: string;
    icons: { leftIcon: 'bookmarks' | 'like'; text: string }[];
}

const RecipeCard = ({ recipe: { category, icons, title, image } }: { recipe: RecipeProps }) => (
    <Card
        minW='158px'
        borderRadius={8}
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
    >
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
        <CardHeader p={0}>
            <Image objectFit='cover' src={image} alt='Chakra UI' borderTopRadius={8} />
        </CardHeader>
        <CardBody p={2}>
            <Heading as='h3' fontSize='1rem' lineHeight={1.5}>
                {title}
            </Heading>
        </CardBody>
        <CardFooter py={0} p={2}>
            <ButtonGroup gap={2} p={1}>
                {icons.map(({ leftIcon, text }, i) => (
                    <CustomProfileButton
                        leftIcon={leftIcon === 'bookmarks' ? <BookmarksIcon /> : <LikeIcon />}
                        text={text}
                        key={i}
                        textColor='brand.green.profile'
                    />
                ))}
            </ButtonGroup>
        </CardFooter>
    </Card>
);

export default RecipeCard;
