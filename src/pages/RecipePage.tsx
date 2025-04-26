import { NumberInputField, NumberInputStepper } from '@chakra-ui/icons';
import {
    Box,
    Button,
    ButtonGroup,
    Heading,
    HStack,
    Image,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router';

import Avatar from '~/assets/images/recipeAuthor.jpg';
import { categoryInfo } from '~/components/mosks/navigation.mock';
import { NutritionValue, veganRecipes } from '~/components/mosks/veganRecipes.mock';
import CustomProfileButton from '~/components/shared/CustomProfileButton';
import {
    BookmarksIcon,
    LikeIcon,
    SubscribeIcon,
    TimeIcon,
    ViewsIcon,
} from '~/components/shared/icons';
import Slider from '~/components/Slider/Slider';

const nutritionKeys: { [K in keyof NutritionValue]: { text: string; unit: string } } = {
    calories: { text: 'калорийность', unit: 'ккал' },
    proteins: { text: 'белки', unit: 'грамм' },
    fats: { text: 'жиры', unit: 'грамм' },
    carbohydrates: { text: 'углеводы', unit: 'грамм' },
};

const RecipePage = () => {
    const [portions, setPortions] = useState<number>(1);
    const { id } = useParams();
    const recipe = veganRecipes.find((item) => item.id === id);

    if (!recipe) return <div>Рецепт не найден</div>;

    const {
        title,
        description,
        image,
        category,
        bookmarks,
        likes,
        time,
        nutritionValue,
        ingredients,
        steps,
    } = recipe;

    return (
        <Box mt={{ base: 4, lg: 6 }} overflowY='auto' mb={{ base: '50px' }}>
            <Stack direction={{ base: 'column', md: 'row' }} gap={{ base: 4, lg: 6 }}>
                <Image
                    src={image}
                    alt={title}
                    w={{ base: '100vw', md: '232px', lg: '353px', xl: '533px' }}
                    h={{ base: '224px', lg: '410px' }}
                    objectFit='cover'
                    borderRadius={8}
                />
                <Stack gap={0} position={{ lg: 'relative' }}>
                    <Stack
                        direction={{ base: 'row' }}
                        justify='space-between'
                        gap={{ base: 2, xl: 50 }}
                    >
                        <Stack>
                            <Stack
                                direction={{ base: 'column', md: 'row' }}
                                wrap={{ md: 'wrap' }}
                                gap={{ base: 2, xl: 4 }}
                            >
                                {category.map((item) => {
                                    const { title, icon } = categoryInfo[item];

                                    return (
                                        <Box
                                            display='flex'
                                            alignItems='center'
                                            bg='brand.green.category'
                                            borderRadius={4}
                                            padding='2px 8px'
                                            maxW='160px'
                                            key={title}
                                            gap={2}
                                        >
                                            <Image src={icon} boxSize={4} />
                                            <Text
                                                noOfLines={1}
                                                as='span'
                                                fontSize='0.875rem'
                                                lineHeight={1.43}
                                                fontWeight={400}
                                            >
                                                {title}
                                            </Text>
                                        </Box>
                                    );
                                })}
                            </Stack>
                        </Stack>
                        <Box>
                            <ButtonGroup gap={2} minH={6}>
                                <CustomProfileButton
                                    leftIcon={<BookmarksIcon />}
                                    text={bookmarks}
                                    textColor='brand.green.profile'
                                />
                                <CustomProfileButton
                                    leftIcon={<LikeIcon />}
                                    text={likes}
                                    textColor='brand.green.profile'
                                />
                            </ButtonGroup>
                        </Box>
                    </Stack>
                    {/* Title */}
                    <Stack gap={{ base: 4, lg: 6 }} mt={6}>
                        <Heading
                            noOfLines={{ base: 2, md: 1, lg: 2 }}
                            fontWeight={{ base: 700 }}
                            fontSize={{ base: '24px', lg: '48px' }}
                            lineHeight={{ base: 1.33, lg: 1 }}
                        >
                            {title}
                        </Heading>
                        <Text
                            noOfLines={{ md: 2 }}
                            fontWeight={{ base: 400 }}
                            fontSize={{ base: '14px' }}
                            lineHeight={{ base: 1.43 }}
                        >
                            {description}
                        </Text>
                    </Stack>
                    {/* Time */}
                    <Stack
                        align='flex-start'
                        mt={{ base: '24px' }}
                        gap={{ base: 3 }}
                        direction={{ base: 'column', md: 'row' }}
                        justify='space-between'
                        position={{ lg: 'absolute' }}
                        bottom={{ lg: 0 }}
                    >
                        <Box
                            display='flex'
                            alignItems='center'
                            bg='rgba(0, 0, 0, 0.06)'
                            borderRadius={4}
                            padding='2px 8px'
                            gap={2}
                        >
                            <TimeIcon boxSize={4} />
                            <Text as='span' fontSize='0.875rem' lineHeight={1.43} fontWeight={400}>
                                {time}
                            </Text>
                        </Box>
                        <Stack direction='row' gap={{ base: 3 }}>
                            <Button
                                display='flex'
                                alignItems='center'
                                bg='rgba(255, 255, 255, 0.06)'
                                border='1px solid rgba(0, 0, 0, 0.48)'
                                borderRadius={4}
                                padding='0px 8px'
                                gap={2}
                                h={6}
                            >
                                <LikeIcon boxSize={4} />
                                <Text
                                    as='span'
                                    fontSize='0.75rem'
                                    lineHeight={1.43}
                                    fontWeight={600}
                                    color='rgba(0, 0, 0, 0.8)'
                                >
                                    Оценить рецепт
                                </Text>
                            </Button>
                            <Button
                                display='flex'
                                alignItems='center'
                                bg='#b1ff2e'
                                borderRadius={4}
                                padding='0px 8px'
                                gap={2}
                                h={6}
                            >
                                <BookmarksIcon boxSize={4} />
                                <Text
                                    as='span'
                                    fontSize='0.75rem'
                                    lineHeight={1.43}
                                    fontWeight={600}
                                >
                                    Сохранить в закладки
                                </Text>
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack w={{ lg: '578px', xl: '668px' }} mx='auto' mt={{ base: 10 }}>
                {/* Nutrition Value */}
                <Stack>
                    <Text
                        color='rgba(0, 0, 0, 0.8)'
                        fontSize='14px'
                        lineHeight={1.43}
                        fontWeight={400}
                    >
                        * Калорийность на 1 порцию
                    </Text>
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        justify={{ md: 'space-between' }}
                    >
                        {Object.entries(nutritionValue).map(([key, value]) => (
                            <Stack
                                direction={{ base: 'row', md: 'column' }}
                                key={key}
                                border='1px solid rgba(0, 0, 0, 0.08)'
                                borderRadius={16}
                                py='16px'
                                px={{ base: '12px', md: '16px' }}
                                h={{ base: '64px', md: 'auto' }}
                                gap={{ base: 1, md: 3 }}
                                align='center'
                            >
                                <Box
                                    display='inline-flex'
                                    color='rgba(0, 0, 0, 0.48)'
                                    fontSize='14px'
                                    lineHeight={1.43}
                                    w={{ base: '118px', md: 'auto' }}
                                >
                                    {nutritionKeys[key as keyof NutritionValue].text}
                                </Box>
                                <Box
                                    display='inline-flex'
                                    color='#134b00'
                                    fontSize={{ base: '24px', md: '36px' }}
                                    lineHeight={{ base: 1.33, md: 1.11 }}
                                    fontWeight={500}
                                    w={{ base: '118px', md: '141px', lg: '104px' }}
                                    justifyContent='center'
                                >
                                    {value}
                                </Box>
                                <Box
                                    display='inline-flex'
                                    color='rgba(0, 0, 0, 0.92)'
                                    fontSize='12px'
                                    lineHeight={1.33}
                                    fontWeight={600}
                                    textTransform='uppercase'
                                >
                                    {nutritionKeys[key as keyof NutritionValue].unit}
                                </Box>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            </Stack>
            {/* Ingredients */}
            <VStack mt={{ base: 6 }} w={{ md: '604px', lg: '578px', xl: '668px' }} mx='auto'>
                <HStack
                    w='100%'
                    justify='space-between'
                    color='#2db100'
                    fontSize='12px'
                    lineHeight={1.33}
                    fontWeight={700}
                    textTransform='uppercase'
                    h='56px'
                    px={2}
                >
                    <Box>ингридиенты</Box>
                    <Stack direction='row' align='center' gap={{ base: 3 }}>
                        <Box>порции</Box>
                        <Box>
                            <NumberInput
                                w='73px'
                                h='40px'
                                min={1}
                                onChange={(valueString) => setPortions(Number(valueString))}
                                value={portions}
                            >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </Box>
                    </Stack>
                </HStack>
                <VStack w='100%'>
                    {ingredients.map((item, i) => (
                        <HStack
                            key={item.title}
                            justify='space-between'
                            w='100%'
                            color='rgba(0, 0, 0, 0.92)'
                            fontSize='14px'
                            lineHeight={1.43}
                            fontWeight={500}
                            p='10px 8px'
                            bg={i % 2 === 0 ? 'rgba(0, 0, 0, 0.06)' : 'transparent'}
                        >
                            <Box>{item.title}</Box>
                            <Box>
                                {Number(item.count) * portions} {item.measureUnit}
                            </Box>
                        </HStack>
                    ))}
                </VStack>
            </VStack>
            {/* END Ingredients */}
            {/* Steps*/}
            <VStack
                mt={{ base: 6, lg: 10 }}
                w={{ md: '604px', lg: '578px', xl: '668px' }}
                mx='auto'
                align='stretch'
            >
                <Heading
                    as='h3'
                    fontSize={{ base: '24px', lg: '48px' }}
                    lineHeight={{ base: 1.33, lg: 1 }}
                    fontWeight={500}
                >
                    Шаги приготовления
                </Heading>
                <VStack mt={5} gap={{ base: 5 }}>
                    {steps.map((step) => (
                        <HStack
                            key={step.stepNumber}
                            w='100%'
                            border='1px solid rgba(0, 0, 0, 0.08)'
                            borderRadius={8}
                            align='stretch'
                        >
                            {step.image && (
                                <Image
                                    src={step.image}
                                    w={{ base: '158px', lg: '346px' }}
                                    borderLeftRadius={8}
                                    objectFit='cover'
                                />
                            )}
                            <Stack
                                p={{ base: '8px 8px 4px 8px', lg: '24px 20px 20px 20px' }}
                                fontSize='14px'
                                lineHeight={1.43}
                                fontWeight={400}
                                gap={{ base: 3, lg: 4 }}
                            >
                                <Box
                                    bg='rgba(0, 0, 0, 0.06)'
                                    p='2px 8px'
                                    borderRadius={4}
                                    display='inline-flex'
                                    alignSelf='flex-start'
                                >
                                    Шаг {step.stepNumber}
                                </Box>
                                <Box>{step.description}</Box>
                            </Stack>
                        </HStack>
                    ))}
                </VStack>
            </VStack>
            {/* END Steps*/}
            {/* Recipe author*/}
            <HStack
                w={{ md: '604px', lg: '578px', xl: '668px' }}
                mx='auto'
                mt={{ base: 6, lg: 10 }}
                p={{ base: 3, md: 6 }}
                bg='#c4ff61'
                borderRadius={8}
                position='relative'
            >
                <Image src={Avatar} borderRadius={99999} boxSize='96px' />
                <VStack h='100%' w='100%' align='flex-start' gap={{ base: 4 }}>
                    <VStack>
                        <Box
                            as='span'
                            position='absolute'
                            top={{ base: 2, md: 6 }}
                            right={{ base: 2, md: 6 }}
                            fontSize={{ base: '12px', md: '14px' }}
                            lineHeight={{ base: 1.33, md: 1.43 }}
                            fontWeight={400}
                        >
                            Автор рецепта
                        </Box>
                        <VStack align='flex-start' gap={0} mt={{ base: 2 }}>
                            <Box
                                fontSize={{ base: '18px', md: '24px' }}
                                lineHeight={{ base: 1.56, md: 1.33 }}
                                fontWeight={{ base: 600, md: 700 }}
                            >
                                Сергей Разумов
                            </Box>
                            <Box
                                fontSize='14px'
                                lineHeight={1.43}
                                fontWeight={400}
                                color='rgba(0, 0, 0, 0.64)'
                            >
                                @serge25
                            </Box>
                        </VStack>
                    </VStack>
                    <HStack w='100%' justify='space-between'>
                        <Button
                            bg='black'
                            color='white'
                            leftIcon={<SubscribeIcon />}
                            border='1px solid rgba(0, 0, 0, 0.08)'
                            borderRadius={6}
                            p='0px 8px'
                            fontSize='12px'
                            lineHeight={1.33}
                            fontWeight={600}
                            h={6}
                        >
                            Подписаться
                        </Button>
                        <CustomProfileButton
                            leftIcon={<ViewsIcon boxSize={{ base: 3, lg: 4 }} />}
                            text='125'
                            textColor='brand.green.profile'
                            px={2}
                        />
                    </HStack>
                </VStack>
            </HStack>
            {/* END Recipe author*/}
            {/* Slider */}
            <Slider />
            {/* END Slider */}
            <Box w='100%' h='100px'></Box>
        </Box>
    );
};

export default RecipePage;
