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
    gap?: string | number;
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
    gap = '6px',
    textColor,
}: CustomButtonProps) => (
    <Center
        flexDirection={flexDirection}
        bg='transparent'
        px={px}
        py={py}
        gap={gap}
        borderRadius={6}
        height={height}
        width={width}
    >
        {leftIcon}
        <Box as='span' fontWeight={600} fontSize='0.75rem' color={textColor}>
            {text}
        </Box>
    </Center>
);

export default CustomProfileButton;
