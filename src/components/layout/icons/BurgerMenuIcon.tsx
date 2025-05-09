import createCustomIcon from '~/components/layout/icons/createCustomIcon';

const paths = ['M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z'];

const BurgerMenuIcon = createCustomIcon({
    displayName: 'BurgerMenuIcon',
    viewBox: '0 0 24 24',
    paths,
});

export default BurgerMenuIcon;
