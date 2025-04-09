import { VeganRecipeCardProps } from '~/components/veganRecipes/vegan-recipes.interface';

const veganRecipes: VeganRecipeCardProps['veganRecipe'][] = [
    {
        id: '1',
        category: {
            icon: 'src/assets/icons/pan-icon.png',
            text: 'Вторые блюда',
        },
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        icons: [
            { leftIcon: 'bookmarks', text: '1' },
            { leftIcon: 'like', text: '1' },
        ],
    },
    {
        id: '2',
        category: {
            icon: 'src/assets/icons/pan-icon.png',
            text: 'Вторые блюда',
        },
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
            icon: 'src/assets/icons/pan-icon.png',
            text: 'Вторые блюда',
        },
        title: 'Стейк для вегетарианцев',
        description: '',
        icons: [
            { leftIcon: 'bookmarks', text: '1' },
            { leftIcon: 'like', text: '1' },
        ],
    },
    {
        id: '4',
        category: {
            icon: 'src/assets/icons/pan-icon.png',
            text: 'Вторые блюда',
        },
        title: 'Котлеты из гречки и фасоли',
        description: '',
        icons: [
            { leftIcon: 'bookmarks', text: '1' },
            { leftIcon: 'like', text: '1' },
        ],
    },
    {
        id: '5',
        category: {
            icon: 'src/assets/icons/pot-icon.png',
            text: 'Вторые блюда',
        },
        title: 'Сырный суп с лапшой и брокколи',
        description: '',
        icons: [
            { leftIcon: 'bookmarks', text: '1' },
            { leftIcon: 'like', text: '1' },
        ],
    },
];

export default veganRecipes;
