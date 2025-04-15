import { SearchIcon } from '@chakra-ui/icons';
import { ButtonGroup, ButtonGroupProps, Center, Image } from '@chakra-ui/react';

import ProfileIcon from '~/assets/icons/avatar.png';
import HomeIcon from '~/assets/icons/home.svg';
import CustomProfileButton from '~/components/shared/CustomProfileButton';

import { CreateIcon } from './icons';

const CreateHomeIcon = () => <Image src={HomeIcon} boxSize={10} />;

const FooterProfile = ({ orientation = 'horizontal' }: ButtonGroupProps) => (
    <ButtonGroup
        w='100%'
        orientation={orientation}
        spacing={0}
        py='10px'
        justifyContent='space-around'
    >
        <CustomProfileButton
            leftIcon={<CreateHomeIcon />}
            text='Главная'
            flexDirection='column'
            width='90px'
        ></CustomProfileButton>
        <CustomProfileButton
            leftIcon={
                <Center boxSize={10}>
                    <SearchIcon boxSize={6} />
                </Center>
            }
            text='Поиск'
            flexDirection='column'
            width='90px'
        ></CustomProfileButton>
        <CustomProfileButton
            leftIcon={
                <Center boxSize={10}>
                    <CreateIcon boxSize={6} />
                </Center>
            }
            text='Записать'
            flexDirection='column'
            width='90px'
        ></CustomProfileButton>
        <CustomProfileButton
            leftIcon={<Image src={ProfileIcon} boxSize={10} />}
            text='Мой профиль'
            flexDirection='column'
            width='90px'
        ></CustomProfileButton>
    </ButtonGroup>
);
export default FooterProfile;
