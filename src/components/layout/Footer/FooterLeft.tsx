import { Button, Text, VStack } from '@chakra-ui/react';

import ExitIcon from '~/components/shared/icons/ExitIcon';

const FooterLeft = () => (
    <VStack spacing={4} fontSize='0.75rem' lineHeight={1.33} align='flex-start'>
        <Text fontWeight={500} color='rgba(0, 0, 0, 0.24)'>
            Версия программы 03.25
        </Text>
        <Text fontWeight={400} color='rgba(0, 0, 0, 0.64)'>
            Все права защищены, ученический файл, <br /> ©Клевер Технолоджи, 2025
        </Text>
        <Button fontWeight={600} variant='ghost' pl={0} leftIcon={<ExitIcon />}>
            Выйти
        </Button>
    </VStack>
);

export default FooterLeft;
