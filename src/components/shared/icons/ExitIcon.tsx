import { CreateCustomIcon } from './CreateCustomIcon';

const paths = [
    'M8 6.5V5.5H3.5V4L1 6L3.5 8V6.5H8Z',
    'M10 1.5H5.5C4.9485 1.5 4.5 1.9485 4.5 2.5V4.5H5.5V2.5H10V9.5H5.5V7.5H4.5V9.5C4.5 10.0515 4.9485 10.5 5.5 10.5H10C10.5515 10.5 11 10.0515 11 9.5V2.5C11 1.9485 10.5515 1.5 10 1.5Z',
];

const ExitIcon = CreateCustomIcon({
    displayName: 'ExitIcon',
    viewBox: '0 0 12 12',
    paths,
});

export default ExitIcon;
