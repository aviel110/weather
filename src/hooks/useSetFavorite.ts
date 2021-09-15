import { useDispatch } from 'react-redux';
import { LocationType } from '../assets/types';
import { onAddFavorite, onDeleteFavorite } from '../stores/locations/actions';

export const useSetFavorite = () => {
  const dispatch = useDispatch();

  const removeFavorite = (locationKey: string) => {
    dispatch(onDeleteFavorite(locationKey));
  };

  const addFavorite = (location: LocationType) => {
    dispatch(onAddFavorite(location));
  };

  return { removeFavorite, addFavorite };
};
