import { Box } from '@chakra-ui/react';

import SaveRecipe from '~/components/layout/aside/SaveRecipe';
import ProfileNotification from '~/components/ProfileNotification';

const RightAside = () => (
    <Box as='aside' w='100%' h='calc(100vh - 80px - 16px)' pt={4}>
        <ProfileNotification orientation='vertical' />
        <SaveRecipe />
    </Box>
);

export default RightAside;
