import { CloseIcon, HamburgerIcon, IconButton } from '@chakra-ui/icons';
import { Box, Portal, useDisclosure, VStack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

import Navigation from '~/components/layout/aside/Navigation';
import FooterLeft from '~/components/layout/Footer/FooterLeft';
import Breadcrumbs from '~/components/shared/Breadcrumbs';

// Создаем motion-компоненты с помощью motion.create()
const MotionBox = motion.create(Box);
const MotionOverlay = motion.create(Box);

const BurgerMenu = () => {
    const { isOpen, onToggle, onClose } = useDisclosure();
    const headerHeight = '80px';

    return (
        <>
            {/* Кнопка бургер/крестик */}
            <IconButton
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                icon={isOpen ? <CloseIcon boxSize={4} /> : <HamburgerIcon boxSize={6} />}
                onClick={onToggle}
                variant='ghost'
                size='lg'
                _hover={{ bg: 'transparent' }}
                _active={{ bg: 'transparent' }}
                display={{ base: 'flex', lg: 'none' }}
            />

            <AnimatePresence>
                {isOpen && (
                    <Portal>
                        {/* Размытый задний фон */}
                        <MotionOverlay
                            position='fixed'
                            top={headerHeight}
                            left='0'
                            right='0'
                            bottom='0'
                            bg='blackAlpha.600'
                            backdropFilter='blur(4px)'
                            zIndex='overlay'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={onClose}
                        />

                        {/* Анимированное меню */}
                        <MotionBox
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
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ type: 'tween', duration: 0.2 }}
                        >
                            <VStack spacing={1} align='stretch' p={4}>
                                <Breadcrumbs display={{ base: 'flex' }} closeBurgerMenu={onClose} />
                                <Navigation closeBurgerMenu={onClose} />
                                <FooterLeft />
                            </VStack>
                        </MotionBox>
                    </Portal>
                )}
            </AnimatePresence>
        </>
    );
};

export default BurgerMenu;
