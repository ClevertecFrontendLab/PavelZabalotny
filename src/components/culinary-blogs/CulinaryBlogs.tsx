import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Heading } from '@chakra-ui/react';

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
        <Box mt={3} display='flex' flexDirection='column' gap={3}>
            {mockCulinaryBlogs.map((culinaryBlog) => (
                <CulinaryBlogCard culinaryBlog={culinaryBlog} key={culinaryBlog.id} />
            ))}
        </Box>
        <Button variant='ghost' mt={3} mx='auto' rightIcon={<ArrowForwardIcon />}>
            Все авторы
        </Button>
    </Box>
);

export default CulinaryBlogs;
