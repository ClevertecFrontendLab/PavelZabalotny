import { Box, Button, Card, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { categoryInfo } from '~/components/mosks/navigation.mock';
import { VeganRecipeCardProps } from '~/components/mosks/veganRecipes.mock';

type VeganRecipeCardTruncProps = {
    veganRecipe: VeganRecipeCardProps;
};

const VeganRecipeCardTrunc: FC<VeganRecipeCardTruncProps> = ({
    veganRecipe: { title, category },
}) => (
    <Card
        border='1px solid rgba(0, 0, 0, 0.08)'
        borderRadius={8}
        p={3}
        w={{ base: '100%', xl: '668px' }}
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
    >
        <Box display='flex' alignItems='center' gap={2}>
            {category.slice(0, 1).map((item) => {
                const { title, icon } = categoryInfo[item];

                return <Image src={icon} boxSize={6} key={title} />;
            })}
            <Text isTruncated fontSize={{ base: '1rem', lg: '1.125rem', xl: '1.25rem' }}>
                {title}
            </Text>
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
