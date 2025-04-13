import { RecipeProps } from '~/components/newRecipes/NewRecipeCard';

const newRecipes: RecipeProps[] = [
    {
        id: '1',
        category: {
            icon: '/src/assets/icons/pot-icon.png',
            text: 'Первые блюда',
        },
        image: '/src/assets/images/solyanka.jpg',
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icons: [{ leftIcon: 'bookmarks', text: '1' }],
    },
    {
        id: '2',
        category: {
            icon: '/src/assets/icons/bay-leaf.png',
            text: 'Веганская кухня',
        },
        image: '/src/assets/images/cutlets.jpg',
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        icons: [
            { leftIcon: 'bookmarks', text: '2' },
            { leftIcon: 'like', text: '1' },
        ],
    },
    {
        id: '3',
        category: {
            icon: '/src/assets/icons/bread-and-rolling-pin-icon.svg',
            text: 'Десерты, выпечка',
        },
        image: '/src/assets/images/pancakes.jpg',
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
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
        image: '/src/assets/images/pancakes.jpg',
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
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
        image: '/src/assets/images/pancakes.jpg',
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icons: [
            { leftIcon: 'bookmarks', text: '1' },
            { leftIcon: 'like', text: '1' },
        ],
    },
];

export default newRecipes;
