import { useEffect, useState } from 'react';
import { DailyForecastDetailedType } from '../assets/types';
import { get5DaysDailyForecastsMock } from '../service/mocks';
import { get5DaysDailyForecasts } from '../service/weather';

export type use5DailyForecastsProps = {
  locationKey: string;
  details?: boolean;
};

export const use5DailyForecasts = (props: use5DailyForecastsProps) => {
  const [dailyForecasts, setDailyForecasts] = useState<DailyForecastDetailedType[]>([]);

  useEffect(() => {
    get5DaysDailyForecastsMock().then(res => setDailyForecasts(res));
    // get5DaysDailyForecasts(props.locationKey, props.details === true).then(res => {
    //   console.log('🚀 ~ file: useDailyForecasts.ts ~ line 15 ~ get5DaysDailyForecasts ~ res', res.DailyForecasts);
    //   setDailyForecasts(res.DailyForecasts);
    // });
  }, [props.locationKey, props.details]);

  return { dailyForecasts };
};
