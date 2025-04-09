import CulinaryBlogs from '~/components/culinary-blogs/CulinaryBlogs';
import MostDelicious from '~/components/most-delicious/MostDelicious';
import NewRecipes from '~/components/new-recipes/NewRecipes';
import Search from '~/components/search/Search';
import VeganRecipes from '~/components/vegan-recipes/VeganRecipes';

const Home = () => (
    <>
        <Search title='Приятного аппетита!' />
        <NewRecipes />
        <MostDelicious />
        <CulinaryBlogs />
        <VeganRecipes />
    </>
);

export default Home;
