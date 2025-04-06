import { Text } from '@chakra-ui/icons';
import { Box, Button, Image } from '@chakra-ui/react';

import { VeganRecipeCardProps } from '~/components/vegan-recipe/VeganRecipeCard';

const VeganRecipeCardTrunc = ({
    dish: {
        title,
        category: { icon },
    },
}: {
    dish: VeganRecipeCardProps['veganRecipe'];
}) => (
    <Box display='flex' alignItems='center' gap={2}>
        <Image src={icon} boxSize={6} />
        <Text isTruncated>{title}</Text>
        <Button
            variant='outline'
            flexShrink={0}
            border='1px solid #2db100'
            borderRadius={6}
            px={2}
            fontSize='0.75rem'
            color='#2db100'
            h={8}
            ml='auto'
        >
            Готовить
        </Button>
    </Box>
);

export default VeganRecipeCardTrunc;
