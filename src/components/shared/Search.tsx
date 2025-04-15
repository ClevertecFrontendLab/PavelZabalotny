import { SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Center,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Switch,
} from '@chakra-ui/react';

import { FilterIcon } from './icons';

interface SearchProps {
    title: string;
    description?: string;
}

const Search = ({ title, description }: SearchProps) => (
    <Center as='section' flexDirection='column' gap={{ base: 4, lg: 3 }}>
        <Heading
            as='h3'
            fontSize={{ base: '1.5rem', lg: '3rem' }}
            fontWeight={700}
            textAlign='center'
            lineHeight={{ base: 1.33, lg: 1 }}
        >
            {title}
        </Heading>
        <Box
            as='p'
            textAlign='center'
            fontSize={{ base: '0.875rem', lg: '1rem' }}
            fontWeight={500}
            lineHeight={{ base: 1.43, lg: 1.5 }}
            color='rgba(0, 0, 0, 0.48)'
            w={{ base: '100%', lg: '696px' }}
        >
            {description}
        </Box>
        <Center display='flex' justifyContent='center' width='100%' gap={3} mt={{ lg: '24px' }}>
            <Center
                border='1px solid rgba(0, 0, 0, 0.48)'
                borderRadius={6}
                boxSize={{ base: 8, lg: 12 }}
                flexShrink={0}
            >
                <FilterIcon boxSize={{ base: 4, lg: 6 }} />
            </Center>
            <InputGroup
                variant='unstaled'
                border='1px solid rgba(0, 0, 0, 0.48)'
                borderRadius={4}
                maxW={{ base: 404, lg: 458 }}
            >
                <Input
                    placeholder='Название или ингредиент...'
                    fontSize={{ base: '0.875rem', lg: '1.125rem' }}
                    h={{ base: 8, lg: 12 }}
                    pl={3}
                    sx={{
                        '::placeholder': {
                            color: '#134b00',
                        },
                    }}
                />
                <InputRightElement h={{ base: 8, lg: 12 }}>
                    <SearchIcon boxSize={{ base: 4, lg: '18px' }} />
                </InputRightElement>
            </InputGroup>
        </Center>

        <Box display={{ base: 'none', lg: 'flex' }} gap={4}>
            <FormControl display='flex' alignItems='center'>
                <FormLabel htmlFor='switch-allergens' mb='0' fontWeight={500} w={214}>
                    Исключить мои аллергены
                </FormLabel>
                <Switch id='switch-allergens' />
            </FormControl>
            <Select
                placeholder='Выберите из списка...'
                color='rgba(0, 0, 0, 0.64)'
                border='1px solid rgba(0, 0, 0, 0.08)'
                sx={{
                    paddingRight: '44px',
                }}
            >
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
        </Box>
    </Center>
);

export default Search;
