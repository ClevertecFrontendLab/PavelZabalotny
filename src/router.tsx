import { createBrowserRouter } from 'react-router';

import Home from '~/components/layout/Home';
import LayoutWrapper from '~/components/layout/LayoutWrapper';
import VeganCuisine from '~/pages/VeganCuisine/VeganCuisine';

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
                Component: VeganCuisine,
            },
        ],
    },
]);

export default router;
