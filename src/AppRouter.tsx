import { createBrowserRouter, RouterProvider } from 'react-router';

import Home from '~/components/layout/Home';
import LayoutWrapper from '~/components/layout/LayoutWrapper';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <LayoutWrapper>
                <Home />
            </LayoutWrapper>
        ),
    },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
