import 'swiper/swiper-bundle.css';

import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Heading, HStack } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import SliderButton from '~/components/shared/SliderButton';

import { veganRecipes } from '../mosks/veganRecipes.mock';
import SliderCard from './SliderCard';

const Slider = () => {
    const top10 = useMemo(() => {
        const copy = [...veganRecipes];
        copy.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        return copy.slice(0, 10);
    }, []);

    return (
        <Box as='section' mt={8} position='relative'>
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
                py={{ base: 3, xl: 4 }}
                alignItems='stretch'
                css={{
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}
            >
                <Swiper
                    data-test-id='carousel'
                    loop
                    slidesPerGroup={1}
                    modules={[Navigation, Keyboard]}
                    navigation={{
                        prevEl: '.swiper-button-prev-btn',
                        nextEl: '.swiper-button-next-btn',
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
                    {top10.map((recipe, i) => (
                        <SwiperSlide key={recipe.id} data-test-id={`carousel-card-${i}`}>
                            <SliderCard recipe={recipe} />
                        </SwiperSlide>
                    ))}
                    <Box h={1}></Box>
                </Swiper>
            </HStack>

            <SliderButton
                className='swiper-button-prev-btn'
                icon={<ArrowBackIcon color='brand.yellow' boxSize={4} />}
                left={-2}
                dataTestId='carousel-back'
            />
            <SliderButton
                className='swiper-button-next-btn'
                icon={<ArrowForwardIcon color='brand.yellow' boxSize={4} />}
                right={-2}
                dataTestId='carousel-forward'
            />
        </Box>
    );
};
export default Slider;
