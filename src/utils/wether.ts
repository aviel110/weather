import { Strings, WeatherIcons } from '../assets';
import { TempUnits } from '../assets/types';

export const cels2Fahr = (valueInCelsius: number) => {
  const fahr = (valueInCelsius * 9) / 5 + 32;
  return Math.round(fahr);
};

export const fahr2Celc = (valueInFahrenheit: number) => {
  const celc = ((valueInFahrenheit - 32) * 5) / 9;
  return Math.round(celc);
};

export const getWeatherIcon = (idx: number) => {
  return WeatherIcons.find(item => item.idx === idx)?.icon;
};

export const formatMinMaxTemp = (min: number, max: number, currUnit: string, displayUnit: string) => {
  let formatMin = min;
  let formatMax = max;
  if (currUnit in TempUnits && displayUnit in TempUnits && currUnit !== displayUnit) {
    formatMin = currUnit === TempUnits.C ? cels2Fahr(min) : fahr2Celc(min);
    formatMax = currUnit === TempUnits.C ? cels2Fahr(max) : fahr2Celc(max);
  }
  return `${Strings.formatTemp(formatMin)}/${Strings.formatTemp(formatMax)}`;
};
