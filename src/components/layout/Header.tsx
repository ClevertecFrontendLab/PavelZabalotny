import {
    Avatar,
    Box,
    Center,
    Container,
    Flex,
    Heading,
    Hide,
    HStack,
    Image,
    Link,
    Show,
    Text,
    VStack,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';

import Breadcrumbs from '~/components/shared/Breadcrumbs';
import BurgerMenu from '~/components/shared/BurgerMenu';
import ProfileNotification from '~/components/shared/ProfileNotification';
import { useBreakpoints } from '~/hooks/useBreakpoints';

import { LogoIcon } from '../shared/icons';

const Header = () => {
    const { isMin768 } = useBreakpoints();

    return (
        <Box
            as='header'
            bg='brand.yellow'
            position='fixed'
            top='0'
            left='0'
            w='100%'
            zIndex={10}
            data-test-id='header'
        >
            <Container maxW='container.xl' py={4}>
                <Flex
                    justify='space-between'
                    align='center'
                    justifyContent='flex-start'
                    gap={{ lg: '140px', xl: '144px' }}
                >
                    <Link href='/' display='inline-flex' gap={2}>
                        <LogoIcon boxSize={8} color='brand.green.logo' aria-label='yee-daa-logo' />
                        {isMin768 && (
                            <Image src='/src/assets/icons/yee-daa.svg' aria-label='yee-daa-logo' />
                        )}
                    </Link>

                    <Flex
                        align='center'
                        w='100%'
                        justifyContent={{ base: 'flex-end', lg: 'space-between' }}
                    >
                        <Breadcrumbs display={{ base: 'none', lg: 'flex' }} />
                        <Hide above='lg'>
                            <ProfileNotification />
                        </Hide>
                        <Center>
                            <BurgerMenu />
                        </Center>
                        <Show above='lg'>
                            <HStack gap={3} mr={14} pl={10}>
                                <Wrap>
                                    <WrapItem>
                                        <Avatar
                                            name='Екатерина Константинопольская'
                                            src='/src/assets/icons/avatar.png'
                                            size='md'
                                        />
                                    </WrapItem>
                                </Wrap>

                                <VStack align='flex-start' gap={0}>
                                    <Heading
                                        as='h4'
                                        fontSize='1.125rem'
                                        lineHeight={1.56}
                                        fontWeight={500}
                                    >
                                        Екатерина Константинопольская
                                    </Heading>
                                    <Text
                                        fontSize='0.875rem'
                                        lineHeight={1.43}
                                        color='rgba(0, 0, 0, 0.64)'
                                        fontWeight={400}
                                    >
                                        @bake_and_pie
                                    </Text>
                                </VStack>
                            </HStack>
                        </Show>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
};

export default Header;
