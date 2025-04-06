import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, Stack } from '@chakra-ui/react';

import CulinaryBlogCard from '~/components/culinary-blogs/CulinaryBlogCard';
import mockCulinaryBlogs from '~/components/culinary-blogs/mock-culinary-blogs';

const CulinaryBlogs = () => (
    <Box
        as='section'
        display='flex'
        flexDirection='column'
        mt={8}
        p={3}
        bg='brand.green.culinaryBlogs'
        borderRadius={16}
    >
        <Heading as='h3' fontSize='1.5rem' fontWeight={500}>
            Кулинарные блоги
        </Heading>
        <Stack direction={['column', 'column', 'row']} mt={3} gap={3}>
            {mockCulinaryBlogs.map((culinaryBlog) => (
                <CulinaryBlogCard culinaryBlog={culinaryBlog} key={culinaryBlog.id} />
            ))}
        </Stack>
        <Button variant='ghost' mt={3} mx='auto' rightIcon={<ArrowForwardIcon />}>
            Все авторы
        </Button>
    </Box>
);

export default CulinaryBlogs;
