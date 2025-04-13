import { Box, ButtonGroup, Card, Image, Text } from '@chakra-ui/react';

import CustomProfileButton from '~/components/CustomProfileButton';
import { BookmarksIcon, LikeIcon } from '~/components/layout/icons';
import { VeganRecipeCardProps } from '~/components/veganRecipes/vegan-recipes.interface';

const VeganRecipeCardFull = ({
    veganRecipe: { title, description, category, icons },
}: {
    veganRecipe: VeganRecipeCardProps['veganRecipe'];
}) => (
    <Card
        border='1px solid rgba(0, 0, 0, 0.08)'
        borderRadius={8}
        p={3}
        w={{ base: '100%', xl: '322px' }}
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
    >
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
                    flexShrink={0}
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
    </Card>
);

export default VeganRecipeCardFull;
