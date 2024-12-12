import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/detail.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

/**
const restaurantContainer = document.getElementById('restaurants');

// Fetch and Render Restaurants
fetch('./data/DATA.json')
  .then((response) => {
    if (!response.ok) throw new Error('JSON file not found');
    return response.json();
  })
  .then((data) => {
    data.restaurants.forEach((restaurant) => {
      const restaurantCard = document.createElement('div');
      restaurantCard.classList.add('restaurant-card');
      restaurantCard.innerHTML = `
        <img src="${restaurant.pictureId}" alt="${restaurant.name}">
        <h3>${restaurant.name}</h3>
        <p>${restaurant.city} | Rating: ${restaurant.rating}</p>
      `;
      restaurantContainer.appendChild(restaurantCard);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('show');
});
*/

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#nav-menu'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

const START = 10;
const NUMBER_OF_IMAGES = 100;

