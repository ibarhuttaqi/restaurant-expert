Feature('Favorite Restaurants');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('favorite one restaurant', ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__title a');
  I.click(locate('.restaurant-item__title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
});

Scenario('unfavorite a restaurant', ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__title a');
  I.click(locate('.restaurant-item__title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  // Membatalkan favorit restoran
  I.click(locate('.restaurant-item__title a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
