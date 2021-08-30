import { useEffect, useState } from 'react';
import { CurrentConditionsType, getCurrentConditionsMock } from '../assets/types';
// import { getCurrentConditions } from '../service/weather';

export type useCurrentStatusProps = {
  locationKey: string;
  details?: boolean;
};

export const useCurrentConditions = (props: useCurrentStatusProps) => {
  const [currentConditions, setCurrentConditions] = useState<CurrentConditionsType | undefined>(undefined);

  useEffect(() => {
    getCurrentConditionsMock().then(res => setCurrentConditions(res));

    // getCurrentConditions(props.locationKey, props.details === true).then(res => {
    //   setCurrentConditions(res[0]);
    // });
  }, [props.locationKey]);

  return { currentConditions };
};
