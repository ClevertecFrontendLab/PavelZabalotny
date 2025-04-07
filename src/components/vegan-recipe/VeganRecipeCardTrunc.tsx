import { Box, Button, Card, Image, Text } from '@chakra-ui/react';

import { VeganRecipeCardProps } from '~/components/vegan-recipe/vegan-recipes.interface';

const VeganRecipeCardTrunc = ({
    veganRecipe: {
        title,
        category: { icon },
    },
}: {
    veganRecipe: VeganRecipeCardProps['veganRecipe'];
}) => (
    <Card
        border='1px solid rgba(0, 0, 0, 0.08)'
        borderRadius={8}
        p={3}
        w='100%'
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
    >
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
    </Card>
);

export default VeganRecipeCardTrunc;
