// import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
// import { createRestaurantItemTemplate } from '../templates/template-creator';

// const Favorite = {
//   async render() {
//     return `
//         <div id="main-content" class="content">
//             <h2 class="content__heading">Your Favorite Restaurants</h2>
//             <div id="restaurants" class="restaurants"></div>
//         </div>
//       `;
//   },

//   async afterRender() {
//     const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
//     const restaurantsContainer = document.querySelector('#restaurants');

//     restaurants.forEach((restaurant) => {
//       restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
//     });

//     document.querySelector('.skip-link').addEventListener('click', (event) => {
//       event.preventDefault();
//       // Tunggu hingga halaman selesai dirender
//       const mainContent = document.querySelector('#main-content');
//       if (mainContent) {
//         mainContent.scrollIntoView({ behavior: 'smooth' });
//         mainContent.focus();
//       }
//     });
//   },
// };

// export default Favorite;

import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantView from './favorited-restaurants/favorite-restaurant-view';
import FavoriteRestaurantShowPresenter from './favorited-restaurants/favorite-restaurant-show-presenter';

const view = new FavoriteRestaurantView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Favorite;
