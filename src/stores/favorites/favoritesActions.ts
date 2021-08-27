import * as store from './favoritesStore';

export const setFavorites = () => {
  setTimeout(() => {
    const favorites = ['Uganda', 'Dubai'];
    store.setters.setFavorites(favorites);
  }, 3000);
};
