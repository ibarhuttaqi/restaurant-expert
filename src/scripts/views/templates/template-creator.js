import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => {
  const categories = restaurant.categories.map((category) => `<span class="category">${category.name}</span>`).join(', ');
  const foods = restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('');
  const drinks = restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('');
  const reviews = restaurant.customerReviews.map((review) => `
      <div class="review">
          <p><strong>${review.name}</strong> - ${review.date}</p>
          <p>${review.review}</p>
      </div>
  `).join('');

  return `
      <div class="restaurant-detail">
          <h2 class="restaurant__title">${restaurant.name}</h2>
          <div class="restaurant__top-section">
              <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
              <div class="restaurant__info">
                  <h3>Information</h3>
                  <p><strong>City:</strong> ${restaurant.city}</p>
                  <p><strong>Address:</strong> ${restaurant.address}</p>
                  <p><strong>Categories:</strong> ${categories}</p>
                  <p><strong>Rating:</strong> ${restaurant.rating}</p>
              </div>
          </div>
          <div class="restaurant__menus">
              <h3>Menus</h3>
              <div class="menus">
                  <div class="menu item">
                      <h4>Foods</h4>
                      <ul>${foods}</ul>
                  </div>
                  <div class="menu item">
                      <h4>Drinks</h4>
                      <ul>${drinks}</ul>
                  </div>
              </div>
          </div>
          <div class="restaurant__overview">
              <h3>Description</h3>
              <p>${restaurant.description}</p>
          </div>
          <div class="restaurant__reviews">
              <h3>Customer Reviews</h3>
              ${reviews}
          </div>
      </div>
  `;
};

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <img class="lazyload restaurant-item__image" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" width="400" height="300" crossorigin="annonymous" >
    <div class="restaurant-item__content">
      <h3 class="restaurant-item__title">
        <a href="/#/detail/${restaurant.id}">${restaurant.name}</a>
      </h3>
      <p class="restaurant-item__info">${restaurant.city} | Rating: ${restaurant.rating}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
