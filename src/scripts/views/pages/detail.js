import UrlParser from '../../routes/url-parser';
import RestaurantCatalogSource from '../../data/restaurant-catalog-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div class="content">
            <h2>Detail Page</h2>
            <div id="detailRestaurant" class="detailRestaurant"></div>
            <div id="reviewFormContainer" class="review-form-container">
              <h3>Add Your Review</h3>
              <form id="reviewForm">
                  <input type="text" id="reviewName" placeholder="Your Name" required />
                  <textarea id="reviewContent" placeholder="Your Review" required></textarea>
                  <button type="submit">Submit Review</button>
              </form>
          </div>
            <div id="likeButtonContainer"></div>
        </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const response = await RestaurantCatalogSource.detailRestaurant(url.id);
    const { restaurant } = response;

    const restaurantContainer = document.querySelector('#detailRestaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });

    // Logika untuk mengirim review
    const reviewForm = document.querySelector('#reviewForm');
    reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const name = document.querySelector('#reviewName').value;
      const review = document.querySelector('#reviewContent').value;

      const reviewData = {
        id: url.id,
        name,
        review,
      };

      try {
        const result = await RestaurantCatalogSource.addReview(reviewData);
        if (!result.error) {
          // Perbarui daftar review di halaman
          const updatedReviews = result.customerReviews.map((review) => `
            <div class="review">
                <p><strong>${review.name}</strong> - ${review.date}</p>
                <p>${review.review}</p>
            </div>
          `).join('');
          document.querySelector('.restaurant__reviews').innerHTML = `
            <h3>Customer Reviews</h3>
            ${updatedReviews}
          `;
          document.querySelector('#reviewForm').reset();
          alert('Review successfully added!');
        }
      } catch (error) {
        alert('Failed to add review. Please try again.');
      }
    });
  },
};

export default Detail;