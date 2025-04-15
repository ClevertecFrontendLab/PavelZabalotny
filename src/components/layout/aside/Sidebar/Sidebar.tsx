import { Box } from '@chakra-ui/react';

import SaveRecipe from '~/components/layout/aside/Sidebar/SaveRecipe';
import ProfileNotification from '~/components/shared/ProfileNotification';

const Sidebar = () => (
    <Box as='aside' w='250px' h='calc(100vh - 80px - 16px)' pt={4} position='fixed' right={0}>
        <ProfileNotification orientation='vertical' />
        <SaveRecipe />
    </Box>
);

export default Sidebar;
