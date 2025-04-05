import createCustomIcon from '~/components/layout/icons/createCustomIcon';

const paths = [
    'M5.25 9.1875C5.25 9.07147 5.29609 8.96019 5.37814 8.87814C5.46019 8.79609 5.57147 8.75 5.6875 8.75H8.3125C8.42853 8.75 8.53981 8.79609 8.62186 8.87814C8.70391 8.96019 8.75 9.07147 8.75 9.1875C8.75 9.30353 8.70391 9.41481 8.62186 9.49686C8.53981 9.57891 8.42853 9.625 8.3125 9.625H5.6875C5.57147 9.625 5.46019 9.57891 5.37814 9.49686C5.29609 9.41481 5.25 9.30353 5.25 9.1875ZM3.5 6.5625C3.5 6.44647 3.54609 6.33519 3.62814 6.25314C3.71019 6.17109 3.82147 6.125 3.9375 6.125H10.0625C10.1785 6.125 10.2898 6.17109 10.3719 6.25314C10.4539 6.33519 10.5 6.44647 10.5 6.5625C10.5 6.67853 10.4539 6.78981 10.3719 6.87186C10.2898 6.95391 10.1785 7 10.0625 7H3.9375C3.82147 7 3.71019 6.95391 3.62814 6.87186C3.54609 6.78981 3.5 6.67853 3.5 6.5625ZM1.75 3.9375C1.75 3.82147 1.79609 3.71019 1.87814 3.62814C1.96019 3.54609 2.07147 3.5 2.1875 3.5H11.8125C11.9285 3.5 12.0398 3.54609 12.1219 3.62814C12.2039 3.71019 12.25 3.82147 12.25 3.9375C12.25 4.05353 12.2039 4.16481 12.1219 4.24686C12.0398 4.32891 11.9285 4.375 11.8125 4.375H2.1875C2.07147 4.375 1.96019 4.32891 1.87814 4.24686C1.79609 4.16481 1.75 4.05353 1.75 3.9375Z',
];

const FilterIcon = createCustomIcon({
    displayName: 'FilterIcon',
    viewBox: '0 0 14 14',
    paths,
});

export default FilterIcon;
