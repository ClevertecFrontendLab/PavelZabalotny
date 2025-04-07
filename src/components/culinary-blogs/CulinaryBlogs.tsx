import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, HStack, Stack } from '@chakra-ui/react';

import CulinaryBlogCard from '~/components/culinary-blogs/CulinaryBlogCard';
import mockCulinaryBlogs from '~/components/culinary-blogs/mock-culinary-blogs';

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
                fontSize={{ base: '1.5rem', lg: '1.875rem' }}
                lineHeight={{ base: 1.33, lg: 1.2 }}
                fontWeight={500}
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

        <Stack direction={['column', 'column', 'row']} mt={3} gap={{ base: 3, lg: 4 }}>
            {mockCulinaryBlogs.map((culinaryBlog) => (
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
