import { SearchIcon } from '@chakra-ui/icons';
import { Box, Center, Heading, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import { FilterIcon } from '~/components/layout/icons';

interface SearchProps {
    title: string;
    description?: string;
}

const Search = ({ title, description }: SearchProps) => (
    <Center as='section' flexDirection='column' gap={4}>
        <Heading as='h3' fontSize={24} fontWeight={700} textAlign='center'>
            {title}
        </Heading>
        <Box as='p' textAlign='center'>
            {description}
        </Box>
        <Center display='flex' justifyContent='space-between' width='100%' gap={3}>
            <Center
                border='1px solid rgba(0, 0, 0, 0.48)'
                borderRadius={6}
                boxSize={8}
                flexShrink={0}
            >
                <FilterIcon />
            </Center>
            <InputGroup variant='unstaled' border='1px solid rgba(0, 0, 0, 0.48)' borderRadius={4}>
                <Input
                    placeholder='Название или ингредиент...'
                    fontSize='0.875rem'
                    height={8}
                    pl={3}
                    sx={{
                        '::placeholder': {
                            color: '#134b00',
                        },
                    }}
                />
                <InputRightElement height={8}>
                    <SearchIcon />
                </InputRightElement>
            </InputGroup>
        </Center>
    </Center>
);

export default Search;
