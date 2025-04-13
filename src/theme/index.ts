import { extendTheme } from '@chakra-ui/react';

import breakpoints from '~/theme/breakpoints';
import colors from '~/theme/colors';
import fonts from '~/theme/fonts';
import sizes from '~/theme/sizes';
import styles from '~/theme/styles';

const customTheme = extendTheme({
    breakpoints,
    colors,
    sizes,
    fonts,
    styles,
});

export default customTheme;
