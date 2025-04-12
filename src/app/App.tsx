import { ChakraProvider } from '@chakra-ui/react';

import AppRouter from '~/AppRouter';
import { useGetPostsQuery } from '~/query/services/posts.ts';
import customTheme from '~/theme';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <ChakraProvider theme={customTheme}>
            <AppRouter />
        </ChakraProvider>
    );
}

export default App;
