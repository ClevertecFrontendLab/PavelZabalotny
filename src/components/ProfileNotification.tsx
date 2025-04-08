import { ButtonGroup, ButtonGroupProps } from '@chakra-ui/react';

import CustomProfileButton from '~/components/CustomProfileButton';
import { BookmarksIcon, LikeIcon, ViewsIcon } from '~/components/layout/icons';

const ProfileNotification = ({ orientation = 'horizontal' }: ButtonGroupProps) => (
    <ButtonGroup
        orientation={orientation}
        px={2}
        py={{ lg: 4 }}
        h='24px'
        position={{ lg: 'relative' }}
        left={{ lg: '132px' }}
        gap={{ lg: 6 }}
    >
        <CustomProfileButton
            leftIcon={<BookmarksIcon boxSize={{ base: 3, lg: 4 }} />}
            text='185'
            textColor='brand.green.profile'
            px={2}
        />
        <CustomProfileButton
            leftIcon={<ViewsIcon boxSize={{ base: 3, lg: 4 }} />}
            text='589'
            textColor='brand.green.profile'
            px={2}
        />
        <CustomProfileButton
            leftIcon={<LikeIcon boxSize={{ base: 3, lg: 4 }} />}
            text='587'
            textColor='brand.green.profile'
            px={2}
        />
    </ButtonGroup>
);
export default ProfileNotification;
