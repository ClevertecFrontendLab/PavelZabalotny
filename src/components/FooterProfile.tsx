import { ButtonGroup, ButtonGroupProps, Center, Image } from '@chakra-ui/react';

import ProfileIcon from '~/assets/icons/avatar.png';
import HomeIcon from '~/assets/icons/home.svg';
import CustomProfileButton from '~/components/CustomProfileButton';
import { CreateIcon, SearchIcon } from '~/components/layout/icons';

const CreateHomeIcon = () => <Image src={HomeIcon} boxSize={10} />;

const FooterProfile = ({ orientation = 'horizontal' }: ButtonGroupProps) => (
    <ButtonGroup orientation={orientation} spacing={0} py='10px'>
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
            gap='6px'
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
