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
