import { ChakraProvider } from '@chakra-ui/react';

import AppRouter from '~/AppRouter';
import customTheme from '~/theme';

function App() {
    return (
        <ChakraProvider theme={customTheme}>
            <AppRouter />
        </ChakraProvider>
    );
}

export default App;
