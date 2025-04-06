import { Card } from '@chakra-ui/react';

import VeganRecipeCardFull from '~/components/vegan-recipe/VeganRecipeCardFull';
import VeganRecipeCardTrunc from '~/components/vegan-recipe/VeganRecipeCardTrunc';

export interface VeganRecipeCardProps {
    veganRecipe: {
        id: string;
        category: {
            icon: string;
            text: string;
        };
        title: string;
        description: string;
        icons: { leftIcon: 'bookmarks' | 'like'; text: string }[];
    };
    isFull: boolean;
}

const VeganRecipeCard = (props: VeganRecipeCardProps) => {
    const { veganRecipe, isFull } = props;

    return (
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
            {isFull ? (
                <VeganRecipeCardFull veganRecipe={veganRecipe} />
            ) : (
                <VeganRecipeCardTrunc dish={veganRecipe} />
            )}
        </Card>
    );
};

export default VeganRecipeCard;
