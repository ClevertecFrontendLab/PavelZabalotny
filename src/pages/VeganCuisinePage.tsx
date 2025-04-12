import { Outlet } from 'react-router';

import MostDelicious from '~/components/mostDelicious/MostDelicious';
import Search from '~/components/search/Search';
import VeganRecipes from '~/components/veganRecipes/VeganRecipes';

const VeganCuisinePage = () => (
    <>
        <Search
            title='Веганская кухня'
            description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
        />
        <Outlet />
        <MostDelicious maxItems={8} />
        <VeganRecipes />
    </>
);

export default VeganCuisinePage;
