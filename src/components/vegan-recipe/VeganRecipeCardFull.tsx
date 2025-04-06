import { Box, ButtonGroup, Image, Text } from '@chakra-ui/react';

import CustomProfileButton from '~/components/CustomProfileButton';
import { BookmarksIcon, LikeIcon } from '~/components/layout/icons';
import { VeganRecipeCardProps } from '~/components/vegan-recipe/VeganRecipeCard';

const VeganRecipeCardFull = ({
    veganRecipe: { title, description, category, icons },
}: {
    veganRecipe: VeganRecipeCardProps['veganRecipe'];
}) => (
    <Box display='flex' flexDirection='column' gap={6}>
        <Box display='flex' flexDirection='column' gap={2}>
            <Text isTruncated as='h3' fontSize='1rem' fontWeight={500} lineHeight={1.5}>
                {title}
            </Text>
            <Text noOfLines={3} fontSize='0.875rem' fontWeight={400} lineHeight={1.43}>
                {description}
            </Text>
        </Box>
        <Box display='flex' justifyContent='space-between'>
            <Box
                display='flex'
                alignItems='center'
                bg='brand.yellow'
                borderRadius={4}
                padding='2px 8px'
                top={2}
                left={2}
            >
                <Image src={category.icon} boxSize={4} />
                <Box as='span' fontSize='0.875rem'>
                    {category.text}
                </Box>
            </Box>
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
        </Box>
    </Box>
);

export default VeganRecipeCardFull;
