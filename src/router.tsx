import { createBrowserRouter } from 'react-router';

import Home from '~/components/layout/Home';
import LayoutWrapper from '~/components/layout/LayoutWrapper';

const router = createBrowserRouter([
    {
        path: '/',
        Component: LayoutWrapper,
        children: [
            {
                index: true,
                Component: Home,
            },
        ],
    },
]);

export default router;
