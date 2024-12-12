import RestaurantCatalog from '../views/pages/restaurant-catalog';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': RestaurantCatalog, // default page
  '/restaurant-catalog': RestaurantCatalog,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
