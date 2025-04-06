import { RecipeProps } from '~/components/new-recipes/NewRecipeCard';

const mockMostDelicious: RecipeProps[] = [
    {
        id: '1',
        image: 'src/assets/images/dish-1.jpg',
        category: {
            icon: 'src/assets/icons/pan-icon.png',
            text: 'Вторые блюда',
        },
        title: 'Кнели со спагетти',
        icons: [
            { leftIcon: 'bookmarks', text: '85' },
            { leftIcon: 'like', text: '152' },
        ],
    },
    {
        id: '2',
        image: 'src/assets/images/dish-2.jpg',
        category: {
            icon: 'src/assets/icons/pan-icon.png',
            text: 'Вторые блюда',
        },
        title: 'Пряная ветчина по итальянски',
        icons: [
            { leftIcon: 'bookmarks', text: '159' },
            { leftIcon: 'like', text: '257' },
        ],
    },
    {
        id: '3',
        image: 'src/assets/images/dish-3.jpg',
        category: {
            icon: 'src/assets/icons/pan-icon.png',
            text: 'Вторые блюда',
        },
        title: 'Лапша с курицей и шафраном',
        icons: [
            { leftIcon: 'bookmarks', text: '258' },
            { leftIcon: 'like', text: '342' },
        ],
    },
    {
        id: '4',
        image: 'src/assets/images/dish-4.jpg',
        category: {
            icon: 'src/assets/icons/pan-icon.png',
            text: 'Национальные',
        },
        title: 'Том-ям с капустой кимчи',
        icons: [
            { leftIcon: 'bookmarks', text: '124' },
            { leftIcon: 'like', text: '324' },
        ],
    },
];

export default mockMostDelicious;
