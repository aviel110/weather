import { useEffect, useState } from 'react';
import { CurrentConditionsDetaildType, CurrentConditionsType } from '../assets/types';
import { getCurrentConditionsMock } from '../service/mocks';
import { getCurrentConditions } from '../service/weather';

export type useCurrentStatusProps = {
  locationKey: string;
  details?: boolean;
};

export const useCurrentConditions = (props: useCurrentStatusProps) => {
  const [currentConditions, setCurrentConditions] = useState<CurrentConditionsType | undefined>(undefined);
  const [currentConditionsDetailed, setCurrentConditionsDetailed] = useState<CurrentConditionsDetaildType | undefined>(undefined);

  useEffect(() => {
    getCurrentConditionsMock().then(res => (props.details === true ? setCurrentConditionsDetailed(res) : setCurrentConditions(res)));

    // getCurrentConditions(props.locationKey, props.details === true).then(res => {
    //   props.details === true ? setCurrentConditionsDetailed(res[0]) : setCurrentConditions(res[0]);
    // });
  }, [props.locationKey, props.details]);

  return { currentConditions, currentConditionsDetailed };
};
