import { Box, Card, Image, Text } from '@chakra-ui/react';

export interface CulinaryBlogCardProps {
    id: string;
    avatar: string;
    userName: string;
    profileTag: string;
    description: string;
}

const CulinaryBlogCard = ({
    culinaryBlog: { userName, avatar, description, profileTag },
}: {
    culinaryBlog: CulinaryBlogCardProps;
}) => (
    <Card
        border='1px solid rgba(0, 0, 0, 0.08)'
        borderRadius={8}
        p={{ base: 4 }}
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
    >
        <Box display='flex' alignItems='center' gap={{ base: 2, lg: 3 }}>
            <Image src={avatar} boxSize={{ base: 8, lg: 12 }} />
            <Box>
                <Text
                    as='h4'
                    isTruncated
                    maxWidth={{ base: '235px', md: '160px', lg: '175px' }}
                    fontWeight={500}
                    lineHeight={{ base: 1.5, lg: 1.56 }}
                    fontSize={{ base: '1rem', lg: '1.125rem' }}
                >
                    {userName}
                </Text>
                <Box
                    fontSize={{ base: '0.75rem', lg: '0.875rem' }}
                    fontWeight={{ base: 1.33, lg: 1.44 }}
                    color='rgba(0, 0, 0, 0.64)'
                >
                    {profileTag}
                </Box>
            </Box>
        </Box>
        <Text as='p' noOfLines={3} fontSize='0.875rem' lineHeight={1.43} mt={4}>
            {description}
        </Text>
    </Card>
);

export default CulinaryBlogCard;
