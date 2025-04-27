import { TabList, Tabs } from '@chakra-ui/icons';
import { Tab } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router';

import { navigation } from '~/components/mosks/navigation.mock';

const CustomTabs = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const pathNames = pathName.split('/').filter(Boolean);
    const tabCategory = navigation.find((category) => category.id === pathNames[0]);
    const tabIndex = tabCategory?.subCategories.findIndex(
        (subCategory) => subCategory.id === pathNames[1],
    );

    return (
        <Tabs as='section' pb={3} mt={8} index={tabIndex}>
            <TabList display='flex' justifyContent='center' flexWrap='wrap'>
                {tabCategory?.subCategories.map((subCategory, i) => (
                    <Tab
                        data-test-id={`tab-${subCategory.id}-${i}`}
                        as={NavLink}
                        to={`/${tabCategory.id}/${subCategory.id}`}
                        key={subCategory.id}
                        flexShrink={0}
                        fontSize={{ base: '0.875rem', lg: '1rem' }}
                        lineHeight={{ base: 1.43, lg: 1.5 }}
                        fontWeight={500}
                        color='#134b00'
                        _selected={{
                            borderColor: '#2db100',
                            color: '#2db100',
                        }}
                    >
                        {subCategory.name}
                    </Tab>
                ))}
            </TabList>
        </Tabs>
    );
};

export default CustomTabs;
