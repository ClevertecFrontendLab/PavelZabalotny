import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, HStack, Stack } from '@chakra-ui/react';

import culinaryBlogsMock from '~/components/mosks/culinaryBlogs.mock';

import CulinaryBlogCard from './CulinaryBlogCard';

const CulinaryBlogs = () => (
    <Box
        as='section'
        display='flex'
        flexDirection='column'
        mt={8}
        p={{ base: 3, lg: 6 }}
        bg='brand.green.culinaryBlogs'
        borderRadius={16}
    >
        <HStack justify='space-between'>
            <Heading
                as='h3'
                fontSize={{ base: '1.5rem', lg: '1.875rem', xl: '2.25rem' }}
                lineHeight={{ base: 1.33, lg: 1.2, xl: 1.11 }}
                fontWeight={{ base: 500, xl: 400 }}
            >
                Кулинарные блоги
            </Heading>
            <Button
                variant='ghost'
                rightIcon={<ArrowForwardIcon />}
                display={{ base: 'none', lg: 'inline-flex' }}
                fontWeight={600}
            >
                Все авторы
            </Button>
        </HStack>

        <Stack
            direction={['column', 'column', 'row']}
            mt={{ base: 3, lg: 4, xl: 6 }}
            gap={{ base: 3, lg: 4 }}
        >
            {culinaryBlogsMock.map((culinaryBlog) => (
                <CulinaryBlogCard culinaryBlog={culinaryBlog} key={culinaryBlog.id} />
            ))}
        </Stack>
        <Button
            variant='ghost'
            mt={3}
            mx='auto'
            rightIcon={<ArrowForwardIcon />}
            display={{ base: 'block', lg: 'none' }}
        >
            Все авторы
        </Button>
    </Box>
);

export default CulinaryBlogs;
