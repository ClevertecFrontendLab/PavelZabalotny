import { Button } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

interface SliderButtonProps {
    icon: ReactElement;
    boxSize?: number;
    p?: string | number;
    bottom?: number;
    left?: number;
    right?: number;
    className?: string;
}

const SliderButton: FC<SliderButtonProps> = ({
    icon,
    boxSize = 10,
    p,
    bottom = 216,
    left,
    right,
    className,
}) => (
    <Button
        leftIcon={icon}
        iconSpacing={0}
        boxSize={boxSize}
        p={p}
        bg='black'
        position='absolute'
        bottom={bottom}
        left={left}
        right={right}
        zIndex={9}
        className={className}
    ></Button>
);

export default SliderButton;
