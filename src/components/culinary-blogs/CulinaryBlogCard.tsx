import { Text } from '@chakra-ui/icons';
import { Box, Card, Image } from '@chakra-ui/react';

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
        p={4}
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
    >
        <Box display='flex' alignItems='center' gap={2}>
            <Image src={avatar} boxSize={8} />
            <Box>
                <Text
                    isTruncated
                    maxWidth={['235px', '235px', '160px']}
                    fontWeight={500}
                    lineHeight={1.5}
                >
                    {userName}
                </Text>
                <Box fontSize='0.75rem' color='rgba(0, 0, 0, 0.64)'>
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
