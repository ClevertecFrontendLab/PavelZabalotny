import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardHeader,
    Center,
    Heading,
    HStack,
    Image,
    Text,
} from '@chakra-ui/react';

import CustomProfileButton from '~/components/CustomProfileButton';
import { BookmarksIcon, LikeIcon } from '~/components/layout/icons';
import { MostDeliciousProps } from '~/components/most-delicious/mock-most-delicious';

const MostDeliciousCard = ({
    recipe: { category, icons, title, description, image, recommendedBy },
}: {
    recipe: MostDeliciousProps;
}) => (
    <Card
        display='flex'
        flexDirection='row'
        // maxH={32}
        w='100%'
        flex={{ base: 'none', md: '1 1 calc(50% - 12px)' }}
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
    >
        <CardHeader p={0}>
            <Box
                position='absolute'
                display={{ base: 'flex', lg: 'none' }}
                alignItems='center'
                bg='brand.yellow'
                borderRadius={4}
                padding='2px 4px'
                top={2}
                left={2}
            >
                <Image src={category.icon} boxSize={4} />
                <Box as='span' fontSize='0.875rem'>
                    {category.text}
                </Box>
            </Box>
            {recommendedBy && (
                <Box
                    position='absolute'
                    display={{ base: 'none', lg: 'flex' }}
                    alignItems='center'
                    bg='brand.green.category'
                    borderRadius={4}
                    padding='2px 4px'
                    bottom={5}
                    left={6}
                    gap={2}
                >
                    <Image src={recommendedBy?.avatar} boxSize={4} />
                    <Box as='span' fontSize='0.875rem'>
                        {recommendedBy?.userName} рекомендует
                    </Box>
                </Box>
            )}
            <Image
                src={image}
                alt='Chakra UI'
                borderLeftRadius={8}
                h={{ base: '128px', lg: '244px' }}
                w={{ base: '158px', lg: '346px' }}
                objectFit='fill'
            />
        </CardHeader>
        <CardBody
            px={{ base: 2, lg: 6 }}
            py={{ base: 2, lg: 5 }}
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
        >
            <Box>
                <HStack justifyContent='space-between'>
                    <Box
                        display={{ base: 'none', lg: 'flex' }}
                        alignItems='center'
                        bg='brand.yellow'
                        borderRadius={4}
                        padding='2px 4px'
                        gap={2}
                    >
                        <Image src={category.icon} boxSize={4} />
                        <Box as='span' fontSize='0.875rem'>
                            {category.text}
                        </Box>
                    </Box>
                    <ButtonGroup gap={2} p={1}>
                        {icons.map(({ leftIcon, text }, i) => (
                            <CustomProfileButton
                                leftIcon={
                                    leftIcon === 'bookmarks' ? <BookmarksIcon /> : <LikeIcon />
                                }
                                text={text}
                                key={i}
                                textColor='brand.green.profile'
                            />
                        ))}
                    </ButtonGroup>
                </HStack>

                <Heading
                    as='h3'
                    fontSize={{ base: '1rem', lg: '1.25rem' }}
                    lineHeight={{ base: 1.5, lg: 1.4 }}
                    mt={{ base: 0, lg: 6 }}
                >
                    {title}
                </Heading>
                <Text
                    display={{ base: 'none', lg: 'block' }}
                    fontWeight={400}
                    fontSize='0.875rem'
                    mt={2}
                >
                    {description}
                </Text>
            </Box>

            <Box
                display='flex'
                flexDirection='row'
                alignItems='center'
                justifyContent='end'
                gap={4}
            >
                <Center
                    w={{ base: 6, lg: 'auto' }}
                    h={{ base: 6, lg: '100%' }}
                    border='1px solid rgba(0, 0, 0, 0.48)'
                    borderRadius={6}
                    px={{ base: 0, lg: 3 }}
                    gap={2}
                    fontSize='0.875rem'
                    lineHeight={1.44}
                    fontWeight={600}
                >
                    <BookmarksIcon boxSize={3} />
                    <Box as='span' display={{ base: 'none', lg: 'inline' }}>
                        Сохранить
                    </Box>
                </Center>
                <Button
                    maxH={{ base: 6, lg: 8 }}
                    bg='#000'
                    color='#fff'
                    fontSize={{ base: '0.75rem', lg: '0.875rem' }}
                    fontWeight={600}
                    px={{ base: 2, lg: 3 }}
                    border='1px solid rgba(0, 0, 0, 0.08)'
                    lineHeight={{ base: 1.33, lg: 1.44 }}
                >
                    Готовить
                </Button>
            </Box>
        </CardBody>
    </Card>
);

export default MostDeliciousCard;
