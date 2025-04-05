import { ButtonGroup, ButtonGroupProps } from '@chakra-ui/react';

import CustomProfileButton from '~/components/CustomProfileButton';
import { BookmarksIcon, LikeIcon, ViewsIcon } from '~/components/layout/icons';

const ProfileNotification = ({ orientation = 'horizontal' }: ButtonGroupProps) => (
    <ButtonGroup orientation={orientation} px={2}>
        <CustomProfileButton
            leftIcon={<BookmarksIcon boxSize={3} />}
            text='185'
            textColor='brand.green.profile'
            px={2}
        />
        <CustomProfileButton
            leftIcon={<ViewsIcon boxSize={3} />}
            text='589'
            textColor='brand.green.profile'
            px={2}
        />
        <CustomProfileButton
            leftIcon={<LikeIcon boxSize={3} />}
            text='587'
            textColor='brand.green.profile'
            px={2}
        />
    </ButtonGroup>
);

export default ProfileNotification;
