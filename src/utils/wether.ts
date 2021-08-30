import { WeatherIcons } from '../assets';

export const getWeatherIcon = (idx: number) => {
  return WeatherIcons.find(item => item.idx === idx)?.icon;
};
