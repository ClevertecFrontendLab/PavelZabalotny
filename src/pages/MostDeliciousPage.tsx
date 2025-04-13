import MostDelicious from '~/components/mostDelicious/MostDelicious';
import Search from '~/components/search/Search';
import VeganRecipes from '~/components/veganRecipes/VeganRecipes';

const MostDeliciousPage = () => (
    <>
        <Search title='Самое сочное' />
        <MostDelicious maxItems={8} />
        <VeganRecipes />
    </>
);

export default MostDeliciousPage;
