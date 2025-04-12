import { Center, Image, Text } from '@chakra-ui/react';

import SaveRecipeIcon from '/src/assets/icons/save-recipe-icon.svg';

const SaveRecipe = () => (
    <Center
        boxSize={52}
        position='fixed'
        bottom={0}
        right='10px'
        bgGradient='radial(30% 30% at 50% 50%, #C4FF61 0%, #FFFFFF 100%)'
        flexDirection='column'
        cursor='pointer'
    >
        <Image src={SaveRecipeIcon} />
        <Text
            fontSize='0.75rem'
            fontWeight={400}
            lineHeight={1.33}
            color='rgba(0, 0, 0, 0.64)'
            position='absolute'
            top='140px'
        >
            Записать рецепт
        </Text>
    </Center>
);

export default SaveRecipe;
