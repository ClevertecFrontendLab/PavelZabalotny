import { Outlet } from 'react-router';

import MostDelicious from '~/components/MostDelicious/MostDelicious';
import Search from '~/components/shared/Search';
import VeganRecipes from '~/components/VeganRecipes/VeganRecipes';

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
