import { Box, Center } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface CustomButtonProps {
    leftIcon: ReactElement;
    text: string;
    flexDirection?: 'row' | 'column';
    height?: string;
    width?: string;
    px?: string | number;
    py?: string | number;
    textColor?: string;
}

const CustomProfileButton = ({
    leftIcon,
    text,
    flexDirection,
    height,
    width,
    px,
    py,
    textColor,
}: CustomButtonProps) => (
    <Center
        flexDirection={flexDirection}
        bg='transparent'
        px={px}
        py={py}
        gap={{ base: '6px', lg: 2 }}
        borderRadius={6}
        height={height}
        width={width}
    >
        {leftIcon}
        <Box
            as='span'
            fontWeight={600}
            fontSize={{ base: '0.75rem', lg: '1rem' }}
            color={textColor}
        >
            {text}
        </Box>
    </Center>
);

export default CustomProfileButton;
