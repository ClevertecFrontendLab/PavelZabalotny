export type SubcategoryId =
    | 'meat-salads'
    | 'fish-salads'
    | 'vegetable-salads'
    | 'warm-salads'
    | 'meat-snacks'
    | 'fish-snacks'
    | 'side-dishes'
    | 'warm-snacks'
    | 'sandwiches'
    | 'fastfood'
    | 'meat-soups'
    | 'vegetable-soups'
    | 'broths'
    | 'cold-soups'
    | 'diet-soups'
    | 'meat'
    | 'fish'
    | 'vegetable'
    | 'poultry-dish'
    | 'mushrooms'
    | 'offal'
    | 'steamed'
    | 'dumplings'
    | 'flour-side'
    | 'vegetable-side'
    | 'pizza'
    | 'sushi'
    | 'pancakes'
    | 'pies'
    | 'cakes'
    | 'rolls'
    | 'muffins'
    | 'cheesecakes'
    | 'puff-pastry'
    | 'choux-pastry'
    | 'yeast-dough'
    | 'buns'
    | 'bread'
    | 'pizza-dough'
    | 'creams'
    | 'grill-beef'
    | 'grill-pork'
    | 'grill-poultry'
    | 'grill-fish'
    | 'grill-mushrooms'
    | 'grill-vegetables'
    | 'vegan-snacks'
    | 'vegan-first'
    | 'vegan-second'
    | 'vegan-side'
    | 'vegan-desserts'
    | 'vegan-bakery'
    | 'vegetables'
    | 'vegan-drinks'
    | 'kids-first'
    | 'kids-second'
    | 'kids-side'
    | 'kids-bakery'
    | 'kids-gluten-free'
    | 'kids-sugar-free'
    | 'kids-allergen-free'
    | 'kids-baby-food'
    | 'kids-diet'
    | 'diet-1'
    | 'diet-2'
    | 'diet-3'
    | 'diet-5'
    | 'diet-6'
    | 'diet-7'
    | 'diet-8'
    | 'diet-9'
    | 'diet-10'
    | 'diet-11'
    | 'diet-12'
    | 'diet-13'
    | 'diet-14'
    | 'gluten-free'
    | 'allergen-free'
    | 'american'
    | 'armenian'
    | 'greek'
    | 'georgian'
    | 'italian'
    | 'spanish'
    | 'chinese'
    | 'mexican'
    | 'panasian'
    | 'russian'
    | 'turkish'
    | 'french'
    | 'swedish'
    | 'japanese'
    | 'other-cuisine'
    | 'meat-sauces'
    | 'cheese-sauces'
    | 'marinades'
    | 'preserves'
    | 'meat-preserves'
    | 'fish-preserves'
    | 'cucumber-preserves'
    | 'tomato-preserves'
    | 'mushroom-preserves'
    | 'vegetable-preserves'
    | 'salads-preserves'
    | 'fruit-preserves'
    | 'juices'
    | 'smoothies'
    | 'compotes'
    | 'kissels'
    | 'coffee'
    | 'tea'
    | 'kvass'
    | 'cocktails'
    | 'alcohol';

export interface SubCategory {
    id: SubcategoryId;
    name: string;
}

export const categoryInfo = {
    salads: { icon: '/src/assets/icons/nav/salad.svg', title: 'Салаты' },
    snacks: { icon: '/src/assets/icons/nav/snack.svg', title: 'Закуски' },
    'first-courses': { icon: '/src/assets/icons/nav/soup.svg', title: 'Первые блюда' },
    'second-dish': { icon: '/src/assets/icons/nav/main-course.svg', title: 'Вторые блюда' },
    desserts: { icon: '/src/assets/icons/nav/dessert.svg', title: 'Десерты, выпечка' },
    grill: { icon: '/src/assets/icons/nav/grill.svg', title: 'Блюда на гриле' },
    vegan: { icon: '/src/assets/icons/nav/vegan.svg', title: 'Веганская кухня' },
    kids: { icon: '/src/assets/icons/nav/kids.svg', title: 'Детские блюда' },
    medical: { icon: '/src/assets/icons/nav/medical.svg', title: 'Лечебное питание' },
    national: { icon: '/src/assets/icons/nav/national.svg', title: 'Национальные' },
    sauces: { icon: '/src/assets/icons/nav/sauce.svg', title: 'Соусы' },
    drinks: { icon: '/src/assets/icons/nav/drink.svg', title: 'Напитки' },
    preserves: { icon: '/src/assets/icons/nav/preserves.svg', title: 'Заготовки' },
} as const;

export type CategoryId = keyof typeof categoryInfo;
export type CategoryTitle = (typeof categoryInfo)[keyof typeof categoryInfo]['title'];
export type CategoryIcon = (typeof categoryInfo)[keyof typeof categoryInfo]['icon'];

export interface Category {
    id: CategoryId;
    title: CategoryTitle;
    icon: CategoryIcon;
    subCategories: SubCategory[];
}

export const navigation: Category[] = [
    {
        id: 'salads',
        title: 'Салаты',
        icon: '/src/assets/icons/nav/salad.svg',
        subCategories: [
            { id: 'meat-salads', name: 'Мясные салаты' },
            { id: 'fish-salads', name: 'Рыбные салаты' },
            { id: 'vegetable-salads', name: 'Овощные салаты' },
            { id: 'warm-salads', name: 'Теплые салаты' },
        ],
    },
    {
        id: 'snacks',
        title: 'Закуски',
        icon: '/src/assets/icons/nav/snack.svg',
        subCategories: [
            { id: 'meat-snacks', name: 'Мясные закуски' },
            { id: 'fish-snacks', name: 'Рыбные закуски' },
            { id: 'side-dishes', name: 'Овощные закуски' },
            { id: 'warm-snacks', name: 'Теплые закуски' },
            { id: 'sandwiches', name: 'Бутерброды' },
            { id: 'fastfood', name: 'Фастфуд' },
        ],
    },
    {
        id: 'first-courses',
        title: 'Первые блюда',
        icon: '/src/assets/icons/nav/soup.svg',
        subCategories: [
            { id: 'meat-soups', name: 'Мясные супы' },
            { id: 'vegetable-soups', name: 'Овощные супы' },
            { id: 'broths', name: 'Бульоны' },
            { id: 'cold-soups', name: 'Холодные супы' },
            { id: 'diet-soups', name: 'Диетические супы' },
        ],
    },
    {
        id: 'second-dish',
        title: 'Вторые блюда',
        icon: '/src/assets/icons/nav/main-course.svg',
        subCategories: [
            { id: 'meat', name: 'Мясные' },
            { id: 'fish', name: 'Рыбные' },
            { id: 'vegetable', name: 'Овощные' },
            { id: 'poultry-dish', name: 'Из птицы' },
            { id: 'mushrooms', name: 'Из грибов' },
            { id: 'offal', name: 'Из субпродуктов' },
            { id: 'steamed', name: 'На пару' },
            { id: 'dumplings', name: 'Пельмени, вареники' },
            { id: 'flour-side', name: 'Мучные гарниры' },
            { id: 'vegetable-side', name: 'Овощные гарниры' },
            { id: 'pizza', name: 'Пицца' },
            { id: 'sushi', name: 'Суши' },
        ],
    },
    {
        id: 'desserts',
        title: 'Десерты, выпечка',
        icon: '/src/assets/icons/nav/dessert.svg',
        subCategories: [
            { id: 'pancakes', name: 'Блины и оладьи' },
            { id: 'pies', name: 'Пироги и пончики' },
            { id: 'cakes', name: 'Торты' },
            { id: 'rolls', name: 'Рулеты' },
            { id: 'muffins', name: 'Кексы и маффины' },
            { id: 'cheesecakes', name: 'Сырники и ватрушки' },
            { id: 'puff-pastry', name: 'Из слоеного теста' },
            { id: 'choux-pastry', name: 'Из заварного теста' },
            { id: 'yeast-dough', name: 'Из дрожжевого теста' },
            { id: 'buns', name: 'Булочки и сдоба' },
            { id: 'bread', name: 'Хлеб' },
            { id: 'pizza-dough', name: 'Тесто на пиццу' },
            { id: 'creams', name: 'Кремы' },
        ],
    },
    {
        id: 'grill',
        title: 'Блюда на гриле',
        icon: '/src/assets/icons/nav/grill.svg',
        subCategories: [
            { id: 'grill-beef', name: 'Говядина' },
            { id: 'grill-pork', name: 'Свинина' },
            { id: 'grill-poultry', name: 'Птица' },
            { id: 'grill-fish', name: 'Рыба' },
            { id: 'grill-mushrooms', name: 'Грибы' },
            { id: 'grill-vegetables', name: 'Овощи' },
        ],
    },
    {
        id: 'vegan',
        title: 'Веганская кухня',
        icon: '/src/assets/icons/nav/vegan.svg',
        subCategories: [
            { id: 'vegan-snacks', name: 'Закуски' },
            { id: 'vegan-first', name: 'Первые блюда' },
            { id: 'vegan-second', name: 'Вторые блюда' },
            { id: 'vegan-side', name: 'Гарниры' },
            { id: 'vegan-desserts', name: 'Десерты' },
            { id: 'vegan-bakery', name: 'Выпечка' },
            { id: 'vegetables', name: 'Сыроедческие блюда' },
            { id: 'vegan-drinks', name: 'Напитки' },
        ],
    },
    {
        id: 'kids',
        title: 'Детские блюда',
        icon: '/src/assets/icons/nav/kids.svg',
        subCategories: [
            { id: 'kids-first', name: 'Первые блюда' },
            { id: 'kids-second', name: 'Вторые блюда' },
            { id: 'kids-side', name: 'Гарниры' },
            { id: 'kids-bakery', name: 'Выпечка' },
            { id: 'kids-gluten-free', name: 'Без глютена' },
            { id: 'kids-sugar-free', name: 'Без сахара' },
            { id: 'kids-allergen-free', name: 'Без аллергенов' },
            { id: 'kids-baby-food', name: 'Блюда для прикорма' },
        ],
    },
    {
        id: 'medical',
        title: 'Лечебное питание',
        icon: '/src/assets/icons/nav/medical.svg',
        subCategories: [
            { id: 'kids-diet', name: 'Детская диета' },
            { id: 'diet-1', name: 'Диета №1' },
            { id: 'diet-2', name: 'Диета №2' },
            { id: 'diet-3', name: 'Диета №3' },
            { id: 'diet-5', name: 'Диета №5' },
            { id: 'diet-6', name: 'Диета №6' },
            { id: 'diet-7', name: 'Диета №7' },
            { id: 'diet-8', name: 'Диета №8' },
            { id: 'diet-9', name: 'Диета №9' },
            { id: 'diet-10', name: 'Диета №10' },
            { id: 'diet-11', name: 'Диета №11' },
            { id: 'diet-12', name: 'Диета №12' },
            { id: 'diet-13', name: 'Диета №13' },
            { id: 'diet-14', name: 'Диета №14' },
            { id: 'gluten-free', name: 'Без глютена' },
            { id: 'allergen-free', name: 'Без аллергенов' },
        ],
    },
    {
        id: 'national',
        title: 'Национальные',
        icon: '/src/assets/icons/nav/national.svg',
        subCategories: [
            { id: 'american', name: 'Американская кухня' },
            { id: 'armenian', name: 'Армянская кухня' },
            { id: 'greek', name: 'Греческая кухня' },
            { id: 'georgian', name: 'Грузинская кухня' },
            { id: 'italian', name: 'Итальянская кухня' },
            { id: 'spanish', name: 'Испанская кухня' },
            { id: 'chinese', name: 'Китайская кухня' },
            { id: 'mexican', name: 'Мексиканская кухня' },
            { id: 'panasian', name: 'Паназиатская кухня' },
            { id: 'russian', name: 'Русская кухня' },
            { id: 'turkish', name: 'Турецкая кухня' },
            { id: 'french', name: 'Французская кухня' },
            { id: 'swedish', name: 'Шведская кухня' },
            { id: 'japanese', name: 'Японская кухня' },
            { id: 'other-cuisine', name: 'Другая кухня' },
        ],
    },
    {
        id: 'sauces',
        title: 'Соусы',
        icon: '/src/assets/icons/nav/sauce.svg',
        subCategories: [
            { id: 'meat-sauces', name: 'Соусы мясные' },
            { id: 'cheese-sauces', name: 'Соусы сырные' },
            { id: 'marinades', name: 'Маринады' },
            { id: 'preserves', name: 'Домашние заготовки' },
            { id: 'meat-preserves', name: 'Мясные заготовки' },
            { id: 'fish-preserves', name: 'Рыбные заготовки' },
            { id: 'cucumber-preserves', name: 'Из огурцов' },
            { id: 'tomato-preserves', name: 'Из томатов' },
            { id: 'mushroom-preserves', name: 'Из грибов' },
            { id: 'vegetable-preserves', name: 'Овощные заготовки' },
            { id: 'salads-preserves', name: 'Салаты, икра' },
            { id: 'fruit-preserves', name: 'Из фруктов и ягод' },
        ],
    },
    {
        id: 'drinks',
        title: 'Напитки',
        icon: '/src/assets/icons/nav/drink.svg',
        subCategories: [
            { id: 'juices', name: 'Соки и фреши' },
            { id: 'smoothies', name: 'Смузи' },
            { id: 'compotes', name: 'Компоты' },
            { id: 'kissels', name: 'Кисели' },
            { id: 'coffee', name: 'Кофе' },
            { id: 'tea', name: 'Лечебный чай' },
            { id: 'kvass', name: 'Квас' },
            { id: 'cocktails', name: 'Коктейли' },
            { id: 'alcohol', name: 'Алкогольные' },
        ],
    },
    {
        id: 'preserves',
        title: 'Заготовки',
        icon: '/src/assets/icons/nav/preserves.svg',
        subCategories: [
            { id: 'meat-preserves', name: 'Мясные заготовки' },
            { id: 'fish-preserves', name: 'Рыбные заготовки' },
            { id: 'cucumber-preserves', name: 'Из огурцов' },
            { id: 'tomato-preserves', name: 'Из томатов' },
            { id: 'mushroom-preserves', name: 'Из грибов' },
            { id: 'vegetable-preserves', name: 'Овощные заготовки' },
            { id: 'salads-preserves', name: 'Салаты, икра' },
            { id: 'fruit-preserves', name: 'Из фруктов и ягод' },
        ],
    },
];
