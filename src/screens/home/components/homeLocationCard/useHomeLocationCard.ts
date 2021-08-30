import { useCurrentConditions } from '../../../../hooks/useCurrentConditions';
import { useSelector } from 'react-redux';
import { getCurrentLocationSelector } from '../../../../stores/home/selectors';

export const useHomeLocationCard = () => {
  const currentLocation = useSelector(getCurrentLocationSelector);
  const { currentConditions } = useCurrentConditions({ locationKey: currentLocation.Key, details: true });

  return { currentConditions, currentLocation };
};
