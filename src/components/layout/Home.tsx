import CulinaryBlogs from '~/components/culinaryBlogs/CulinaryBlogs';
import MostDelicious from '~/components/mostDelicious/MostDelicious';
import NewRecipes from '~/components/newRecipes/NewRecipes';
import Search from '~/components/search/Search';
import VeganRecipes from '~/components/veganRecipes/VeganRecipes';

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
