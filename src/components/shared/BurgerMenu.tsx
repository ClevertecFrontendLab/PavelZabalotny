import { CloseIcon, HamburgerIcon, IconButton } from '@chakra-ui/icons';
import { Box, Portal, useDisclosure } from '@chakra-ui/react';

import Navigation from '~/components/layout/aside/Navigation';
import FooterLeft from '~/components/layout/Footer/FooterLeft';
import Breadcrumbs from '~/components/shared/Breadcrumbs';

const BurgerMenu = () => {
    const { isOpen, onToggle, onClose } = useDisclosure();
    const headerHeight = '80px';

    return (
        <>
            {/* Кнопка бургер/крестик */}
            <IconButton
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                icon={
                    isOpen ? (
                        <CloseIcon boxSize={4} data-test-id='close-icon' />
                    ) : (
                        <HamburgerIcon boxSize={6} data-test-id='hamburger-icon' />
                    )
                }
                onClick={onToggle}
                variant='ghost'
                size='lg'
                _hover={{ bg: 'transparent' }}
                _active={{ bg: 'transparent' }}
                visibility={{ base: 'visible', lg: 'hidden' }}
            />

            {isOpen && (
                <Portal>
                    {/* Размытый задний фон */}
                    <Box
                        position='fixed'
                        top={headerHeight}
                        left='0'
                        right='0'
                        bottom='0'
                        bg='blackAlpha.600'
                        backdropFilter='blur(4px)'
                        zIndex='overlay'
                        onClick={onClose}
                    />

                    {/* Меню */}
                    <Box
                        position='fixed'
                        top={headerHeight}
                        left={{ base: '8px', md: 'calc(100% - 344px - 8px)' }}
                        right={{ base: '8px', md: '0' }}
                        width={{ base: 'calc(100% - 16px)', md: '344px' }}
                        height={{ base: '652px', md: '848px' }}
                        zIndex='modal'
                        bg='white'
                        color='gray.800'
                        shadow='xl'
                        borderBottomRadius='md'
                        overflowY='auto'
                    >
                        <Box p={4}>
                            <Breadcrumbs display={{ base: 'flex' }} closeBurgerMenu={onClose} />
                            <Navigation closeBurgerMenu={onClose} />
                            <FooterLeft />
                        </Box>
                    </Box>
                </Portal>
            )}
        </>
    );
};

export default BurgerMenu;
