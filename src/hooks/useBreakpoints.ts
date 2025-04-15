import { useMediaQuery } from '@chakra-ui/react';

export const useBreakpoints = () => {
    const [isMin768, isAbove768, isMin1440] = useMediaQuery([
        '(min-width: 768px)',
        '(min-width: 769px)',
        '(min-width: 1440px)',
    ]);

    return {
        isMin768,
        isAbove768,
        isMin1440,
    };
};
