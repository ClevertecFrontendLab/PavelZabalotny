import { RecipeProps } from '~/components/new-recipes/RecipeCard';

const mockRecipes: RecipeProps[] = [
    {
        id: '1',
        category: {
            icon: 'src/assets/icons/pot-icon.png',
            text: 'Первые блюда',
        },
        image: 'src/assets/images/solyanka.jpg',
        title: 'Солянка с грибами',
        icons: [{ leftIcon: 'bookmarks', text: '1' }],
    },
    {
        id: '2',
        category: {
            icon: 'src/assets/icons/bay-leaf.png',
            text: 'Веганские блюда',
        },
        image: 'src/assets/images/cutlets.jpg',
        title: 'Капустные котлеты',
        icons: [
            { leftIcon: 'bookmarks', text: '2' },
            { leftIcon: 'like', text: '1' },
        ],
    },
    {
        id: '3',
        category: {
            icon: 'src/assets/icons/bay-leaf.png',
            text: 'Первые блюда',
        },
        image: 'src/assets/images/solyanka.jpg',
        title: 'Солянка с грибами',
        icons: [
            { leftIcon: 'bookmarks', text: '1' },
            { leftIcon: 'like', text: '1' },
        ],
    },
];

export default mockRecipes;
