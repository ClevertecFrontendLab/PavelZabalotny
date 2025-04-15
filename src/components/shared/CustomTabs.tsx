import { TabList, Tabs } from '@chakra-ui/icons';
import { Tab } from '@chakra-ui/react';

import { navigation } from '~/components/mosks/navigation.mock';

const CustomTabs = () => {
    const tabCategory = navigation.filter((category) => category.id === 'vegan')[0];

    return (
        <Tabs as='section' pb={3} mt={8} overflowX='auto'>
            <TabList display='flex' justifyContent='center'>
                {tabCategory.subCategories.map((subCategory) => (
                    <Tab
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
