import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, ResponsiveValue } from '@chakra-ui/react';
import { Property } from 'csstype';
import { FC } from 'react';
import { NavLink, useLocation } from 'react-router';

import {
    CategoryId,
    CategoryTitle,
    navigation,
    SubCategory,
} from '~/components/mosks/navigation.mock';

type BreadcrumbProps = {
    display?: ResponsiveValue<Property.Display>;
    closeBurgerMenu?: () => void;
};

export const Breadcrumbs: FC<BreadcrumbProps> = ({ display, closeBurgerMenu }) => {
    const location = useLocation();
    const pathName = location.pathname;

    const pathNames = pathName.split('/').filter(Boolean);
    let categoryId: CategoryId;

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

            {pathNames.map((segment, index, array) => {
                const routeTo = '/' + pathNames.slice(0, index + 1).join('/');
                const isLast = index === pathNames.length - 1;

                const categoryTitle: CategoryTitle | undefined = navigation.find(({ id }) => {
                    categoryId = id;

                    return id === segment || id === array[index - 1];
                })?.title;

                const subCategoryName: string | null | undefined =
                    index > 0
                        ? navigation
                              .find(({ id }) => id === categoryId)
                              ?.subCategories.find(({ id }) => id === segment)?.name
                        : null;

                const label: CategoryTitle | SubCategory['name'] | undefined = subCategoryName
                    ? subCategoryName
                    : categoryTitle;

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
