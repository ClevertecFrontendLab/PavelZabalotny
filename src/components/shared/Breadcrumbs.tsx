import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router';

const customLabels: Record<string, string> = {
    'vegan-cuisine': 'Веганская кухня',
    'most-delicious': 'Самое сочное',
};

export const Breadcrumbs = () => {
    const location = useLocation();
    const pathname = location.pathname;

    const pathnames = pathname.split('/').filter(Boolean);

    return (
        <Breadcrumb separator='>' fontSize='sm' padding={4} display={{ base: 'none', xl: 'flex' }}>
            <BreadcrumbItem key='home'>
                <BreadcrumbLink as={NavLink} to='/'>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>

            {pathnames.map((segment, index) => {
                const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
                const isLast = index === pathnames.length - 1;

                const label =
                    customLabels[segment] ||
                    segment
                        .split('-')
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ');

                return (
                    <BreadcrumbItem key={routeTo} isCurrentPage={isLast}>
                        {isLast ? (
                            <BreadcrumbLink aria-current='page'>{label}</BreadcrumbLink>
                        ) : (
                            <BreadcrumbLink as={NavLink} to={routeTo}>
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
