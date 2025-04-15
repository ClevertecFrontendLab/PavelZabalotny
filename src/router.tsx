import { createBrowserRouter } from 'react-router';

import LayoutWrapper from '~/components/layout/LayoutWrapper';
import CustomTabs from '~/components/shared/CustomTabs';
import HomePage from '~/pages/HomePage';
import MostDeliciousPage from '~/pages/MostDeliciousPage';
import VeganCuisinePage from '~/pages/VeganCuisinePage';

const router = createBrowserRouter([
    {
        path: '/',
        Component: LayoutWrapper,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: 'vegan-cuisine',
                Component: VeganCuisinePage,
                children: [
                    {
                        path: ':subCategoryId',
                        Component: CustomTabs,
                    },
                ],
            },
            {
                path: 'most-delicious',
                Component: MostDeliciousPage,
            },
        ],
    },
]);

export default router;
