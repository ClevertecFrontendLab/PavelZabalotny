import { RecipeProps } from '~/components/new-recipes/NewRecipeCard';

export interface MostDeliciousProps extends RecipeProps {
    description: string;
    recommendedBy?: {
        avatar: string;
        userName: string;
    };
}

const mockMostDelicious: MostDeliciousProps[] = [
    {
        id: '1',
        image: 'src/assets/images/dish-1.jpg',
        category: {
            icon: 'src/assets/icons/pan-icon.png',
            text: 'Вторые блюда',
        },
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
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
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icons: [
            { leftIcon: 'bookmarks', text: '159' },
            { leftIcon: 'like', text: '257' },
        ],
        recommendedBy: {
            avatar: 'src/assets/images/elenapovar.png',
            userName: 'Елена Высоцкая',
        },
    },
    {
        id: '3',
        image: 'src/assets/images/dish-3.jpg',
        category: {
            icon: 'src/assets/icons/pan-icon.png',
            text: 'Вторые блюда',
        },
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icons: [
            { leftIcon: 'bookmarks', text: '258' },
            { leftIcon: 'like', text: '342' },
        ],
        recommendedBy: {
            avatar: 'src/assets/images/funtasticooking.png',
            userName: 'Alex Cook',
        },
    },
    {
        id: '4',
        image: 'src/assets/images/dish-4.jpg',
        category: {
            icon: 'src/assets/icons/pan-icon.png',
            text: 'Национальные',
        },
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icons: [
            { leftIcon: 'bookmarks', text: '124' },
            { leftIcon: 'like', text: '324' },
        ],
    },
];

export default mockMostDelicious;
