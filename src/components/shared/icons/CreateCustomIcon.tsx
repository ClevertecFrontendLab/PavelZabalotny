import { createIcon } from '@chakra-ui/icons';

type IconOptions = Parameters<typeof createIcon>[0];

export interface CreateIconOptions extends Omit<IconOptions, 'path' | 'd'> {
    displayName: string;
    viewBox: string;
    paths: string[];
}

export const CreateCustomIcon = ({ displayName, viewBox, paths, ...rest }: CreateIconOptions) =>
    createIcon({
        displayName,
        viewBox,
        path: paths.map((d, i) => <path d={d} key={i} fill='currentColor' />),
        ...rest,
    });
