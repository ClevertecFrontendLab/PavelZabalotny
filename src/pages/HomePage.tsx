import CulinaryBlogs from '~/components/CulinaryBlogs/CulinaryBlogs';
import MostDelicious from '~/components/MostDelicious/MostDelicious';
import NewRecipes from '~/components/NewRecipes/NewRecipes';
import Search from '~/components/shared/Search';
import VeganRecipes from '~/components/VeganRecipes/VeganRecipes';

const HomePage = () => (
    <>
        <Search title='Приятного аппетита!' />
        <NewRecipes />
        <MostDelicious maxItems={4} />
        <CulinaryBlogs />
        <VeganRecipes />
    </>
);

export default HomePage;
