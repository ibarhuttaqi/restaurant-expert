import RestaurantCatalogSource from '../../data/restaurant-catalog-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantCatalog = {
  async render() {
    return `
        <div id="main-content" class="content">
            <h2>Restaurant Catalog Page</h2>
            <div id="restaurantCatalog" class="restaurantCatalog"></div>
        </div>
      `;
  },

  async afterRender() {
    const restaurantCatalog = await RestaurantCatalogSource.restaurantCatalog();
    const restaurants = restaurantCatalog.restaurants;
    // console.log(restaurantCatalog);
    const restaurantCatalogContainer = document.querySelector('#restaurantCatalog');
    restaurants.forEach((restaurant) => {
      restaurantCatalogContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    document.querySelector('.skip-link').addEventListener('click', (event) => {
      event.preventDefault();
      // Tunggu hingga halaman selesai dirender
      const mainContent = document.querySelector('#main-content');
      if (mainContent) {
        mainContent.scrollIntoView({ behavior: 'smooth' });
        mainContent.focus();
      }
    });
  },
};

export default RestaurantCatalog;