import MostDelicious from '~/components/MostDelicious/MostDelicious';
import Search from '~/components/shared/Search';
import VeganRecipes from '~/components/VeganRecipes/VeganRecipes';

const MostDeliciousPage = () => (
    <>
        <Search title='Самое сочное' />
        <MostDelicious maxItems={8} />
        <VeganRecipes />
    </>
);

export default MostDeliciousPage;
