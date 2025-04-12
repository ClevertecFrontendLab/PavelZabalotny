import { createBrowserRouter } from 'react-router';

import Home from '~/components/layout/Home';
import LayoutWrapper from '~/components/layout/LayoutWrapper';
import MostDeliciousPage from '~/pages/MostDeliciousPage';
import VeganCuisinePage from '~/pages/VeganCuisinePage';

const router = createBrowserRouter([
    {
        path: '/',
        Component: LayoutWrapper,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: 'vegan-cuisine',
                Component: VeganCuisinePage,
            },
            {
                path: 'most-delicious',
                Component: MostDeliciousPage,
            },
        ],
    },
]);

export default router;
