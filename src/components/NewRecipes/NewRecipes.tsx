import 'swiper/css';

import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Heading, HStack, Show } from '@chakra-ui/react';
import { Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import newRecipes from '~/components/mosks/newRecipes.mock';
import SliderButton from '~/components/shared/SliderButton';

import NewRecipeCard from './NewRecipeCard';

const NewRecipes = () => (
    <Box as='section' mt={8} position='relative' overflow='hidden'>
        <Heading
            as='h3'
            fontSize={{ base: '1.5rem', lg: '2.25rem', xl: '3rem' }}
            lineHeight={{ base: 1.33, lg: 1.11, xl: 1 }}
            fontWeight={500}
        >
            Новые рецепты
        </Heading>

        <HStack
            position='relative'
            overflowX='visible'
            py={{ base: 3, xl: 4 }}
            alignItems='stretch'
            css={{
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
            }}
        >
            <Swiper
                loop
                slidesPerGroup={1}
                modules={[Navigation, Keyboard]}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                keyboard={{ enabled: true, onlyInViewport: true }}
                breakpoints={{
                    360: {
                        slidesPerView: 2,
                        spaceBetween: 12,
                    },
                    768: {
                        slidesPerView: 4.35,
                        spaceBetween: 12,
                    },
                    1440: {
                        slidesPerView: 3.1,
                        spaceBetween: 12,
                    },
                    1920: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                }}
                onSwiper={(swiper) => {
                    setTimeout(() => {
                        if (swiper.navigation) {
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }
                    });
                }}
            >
                {newRecipes.map((recipe) => (
                    <SwiperSlide key={recipe.id}>
                        <NewRecipeCard recipe={recipe} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </HStack>
        <Show above='lg'>
            <SliderButton
                className='swiper-button-prev'
                icon={<ArrowBackIcon color='brand.yellow' boxSize={4} />}
                left={-2}
            />
            <SliderButton
                className='swiper-button-next'
                icon={<ArrowForwardIcon color='brand.yellow' boxSize={4} />}
                right={-2}
            />
        </Show>
    </Box>
);
export default NewRecipes;
