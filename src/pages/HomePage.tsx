import CulinaryBlogs from '~/components/CulinaryBlogs/CulinaryBlogs';
import MostDelicious from '~/components/MostDelicious/MostDelicious';
import Search from '~/components/shared/Search';
import Slider from '~/components/Slider/Slider';
import VeganRecipes from '~/components/VeganRecipes/VeganRecipes';

const HomePage = () => (
    <>
        <Search title='Приятного аппетита!' />
        <Slider />
        <MostDelicious maxItems={4} />
        <CulinaryBlogs />
        <VeganRecipes />
    </>
);

export default HomePage;
