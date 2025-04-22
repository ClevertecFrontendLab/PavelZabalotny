import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, ResponsiveValue } from '@chakra-ui/react';
import { Property } from 'csstype';
import { FC } from 'react';
import { NavLink, useLocation } from 'react-router';

import { Category, navigation } from '~/components/mosks/navigation.mock';
import { veganRecipes } from '~/components/mosks/veganRecipes.mock';

type BreadcrumbProps = {
    display?: ResponsiveValue<Property.Display>;
    closeBurgerMenu?: () => void;
};

export const Breadcrumbs: FC<BreadcrumbProps> = ({ display, closeBurgerMenu }) => {
    const location = useLocation();
    const pathName = location.pathname;

    const pathNames = pathName.split('/').filter(Boolean);
    let label: string | undefined;
    let categoryItem: Category | undefined;

    return (
        <Breadcrumb
            separator='>'
            fontSize='sm'
            padding={4}
            display={display}
            sx={{ '& ol': { flexWrap: 'wrap' } }}
        >
            <BreadcrumbItem key='home'>
                <BreadcrumbLink as={NavLink} to='/' onClick={closeBurgerMenu}>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>

            {pathNames.map((segment, index) => {
                const routeTo = '/' + pathNames.slice(0, index + 1).join('/');
                const isLast = index === pathNames.length - 1;

                if (index === 0) {
                    categoryItem = navigation.find(({ id }) => id === segment);
                    label = categoryItem?.title;
                }

                if (index === 1) {
                    label = categoryItem?.subCategories.find(({ id }) => id === segment)?.name;
                }

                if (index === 2) {
                    label = veganRecipes.find(({ id }) => id === segment)?.title;
                }

                return (
                    <BreadcrumbItem key={routeTo} isCurrentPage={isLast}>
                        {isLast ? (
                            <BreadcrumbLink aria-current='page'>{label}</BreadcrumbLink>
                        ) : (
                            <BreadcrumbLink as={NavLink} to={routeTo} onClick={closeBurgerMenu}>
                                {label}
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};

export default Breadcrumbs;
