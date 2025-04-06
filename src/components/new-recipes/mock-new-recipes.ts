import { RecipeProps } from '~/components/new-recipes/NewRecipeCard';

const mockNewRecipes: RecipeProps[] = [
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
            text: 'Десерты, выпечка',
        },
        image: 'src/assets/images/pancakes.jpg',
        title: 'Оладьи на кефире "Пышные"',
        icons: [
            { leftIcon: 'bookmarks', text: '1' },
            { leftIcon: 'like', text: '1' },
        ],
    },
    {
        id: '4',
        category: {
            icon: '',
            text: '',
        },
        image: 'src/assets/images/pancakes.jpg',
        title: 'Оладьи на кефире "Пышные"',
        icons: [
            { leftIcon: 'bookmarks', text: '1' },
            { leftIcon: 'like', text: '1' },
        ],
    },
    {
        id: '5',
        category: {
            icon: '',
            text: '',
        },
        image: 'src/assets/images/pancakes.jpg',
        title: 'Оладьи на кефире "Пышные"',
        icons: [
            { leftIcon: 'bookmarks', text: '1' },
            { leftIcon: 'like', text: '1' },
        ],
    },
];

export default mockNewRecipes;
