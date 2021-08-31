import { CurrentConditionsDetaildType, CurrentConditionsType, DailyForecastDetailedType, LocationType } from '../assets/types';

function delay(delayInms: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

export const locationTypeMock_Jerusalem: LocationType = {
  AdministrativeArea: {
    ID: 'JM',
    LocalizedName: 'Jerusalem',
  },
  Country: {
    ID: 'IL',
    LocalizedName: 'Israel',
  },
  Key: '213225',
  LocalizedName: 'Jerusalem',
  Rank: 30,
  Type: 'City',
  Version: 1,
};

export const locationTypeMock_TelAviv: LocationType = {
  AdministrativeArea: { ID: 'TA', LocalizedName: 'Tel Aviv' },
  Country: { ID: 'IL', LocalizedName: 'Israel' },
  Key: '215854',
  LocalizedName: 'Tel Aviv',
  Rank: 31,
  Type: 'City',
  Version: 1,
};

export const locConditionsMock: CurrentConditionsType = {
  EpochTime: 1630334700,
  HasPrecipitation: false,
  IsDayTime: true,
  Link: 'http://www.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us',
  LocalObservationDateTime: '2021-08-30T17:45:00+03:00',
  MobileLink: 'http://www.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us',
  PrecipitationType: null,
  Temperature: {
    Imperial: { Unit: 'F', UnitType: 18, Value: 82 },
    Metric: { Unit: 'C', UnitType: 17, Value: 27.9 },
  },
  WeatherIcon: 1,
  WeatherText: 'Sunny',
};

const oneDayForecastDetailes: DailyForecastDetailedType = {
  AirAndPollen: [
    { Category: 'Good', CategoryValue: 1, Name: 'AirQuality', Type: 'Ozone', Value: 0 },
    { Category: 'Low', CategoryValue: 1, Name: 'Grass', Value: 0 },
    { Category: 'Low', CategoryValue: 1, Name: 'Mold', Value: 0 },
    { Category: 'Low', CategoryValue: 1, Name: 'Ragweed', Value: 0 },
    { Category: 'Low', CategoryValue: 1, Name: 'Tree', Value: 0 },
    { Category: 'Very High', CategoryValue: 4, Name: 'UVIndex', Value: 9 },
  ],
  Date: '2021-08-31T07:00:00+03:00',
  Day: {
    CloudCover: 6,
    Evapotranspiration: { Unit: 'in', UnitType: 1, Value: 0.21 },
    HasPrecipitation: false,
    HoursOfIce: 0,
    HoursOfPrecipitation: 0,
    HoursOfRain: 0,
    HoursOfSnow: 0,
    Ice: { Unit: 'in', UnitType: 1, Value: 0 },
    IceProbability: 0,
    Icon: 1,
    IconPhrase: 'Sunny',
    LongPhrase: 'Sunny and pleasant',
    PrecipitationProbability: 0,
    Rain: { Unit: 'in', UnitType: 1, Value: 0 },
    RainProbability: 0,
    ShortPhrase: 'Sunny and pleasant',
    Snow: { Unit: 'in', UnitType: 1, Value: 0 },
    SnowProbability: 0,
    SolarIrradiance: { Unit: 'W/m²', UnitType: 33, Value: 108 },
    ThunderstormProbability: 0,
    TotalLiquid: { Unit: 'in', UnitType: 1, Value: 0 },
    Wind: {
      Direction: { Degrees: 293, Localized: 'WNW', English: 'WNW' },
      Speed: { Metric: { Value: 19.6, Unit: 'km/h', UnitType: 7 }, Imperial: { Value: 12.2, Unit: 'mi/h', UnitType: 9 } },
    },
    WindGust: {
      Direction: { Degrees: 293, Localized: 'WNW', English: 'WNW' },
      Speed: { Metric: { Value: 19.6, Unit: 'km/h', UnitType: 7 }, Imperial: { Value: 12.2, Unit: 'mi/h', UnitType: 9 } },
    },
  },
  DegreeDaySummary: { Cooling: { Unit: 'F', UnitType: 18, Value: 13 }, Heating: { Unit: 'F', UnitType: 18, Value: 0 } },
  EpochDate: 1630382400,
  HoursOfSun: 12.1,
  Link: 'http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=1&lang=en-us',
  MobileLink: 'http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=1&lang=en-us',
  Moon: { Age: 23, EpochRise: null, EpochSet: 1630409100, Phase: 'WaningCrescent', Rise: null, Set: '2021-08-31T14:25:00+03:00' },
  Night: {
    CloudCover: 3,
    Evapotranspiration: { Unit: 'in', UnitType: 1, Value: 0.01 },
    HasPrecipitation: false,
    HoursOfIce: 0,
    HoursOfPrecipitation: 0,
    HoursOfRain: 0,
    HoursOfSnow: 0,
    Ice: { Unit: 'in', UnitType: 1, Value: 0 },
    IceProbability: 0,
    Icon: 33,
    IconPhrase: 'Clear',
    LongPhrase: 'Clear and humid',
    PrecipitationProbability: 0,
    Rain: { Unit: 'in', UnitType: 1, Value: 0 },
    RainProbability: 0,
    ShortPhrase: 'Clear and humid',
    Snow: { Unit: 'in', UnitType: 1, Value: 0 },
    SnowProbability: 0,
    SolarIrradiance: { Unit: 'W/m²', UnitType: 33, Value: 3.2 },
    ThunderstormProbability: 0,
    TotalLiquid: { Unit: 'in', UnitType: 1, Value: 0 },
    Wind: {
      Direction: { Degrees: 293, Localized: 'WNW', English: 'WNW' },
      Speed: { Metric: { Value: 19.6, Unit: 'km/h', UnitType: 7 }, Imperial: { Value: 12.2, Unit: 'mi/h', UnitType: 9 } },
    },
    WindGust: {
      Direction: { Degrees: 293, Localized: 'WNW', English: 'WNW' },
      Speed: { Metric: { Value: 19.6, Unit: 'km/h', UnitType: 7 }, Imperial: { Value: 12.2, Unit: 'mi/h', UnitType: 9 } },
    },
  },
  RealFeelTemperature: { Maximum: { Unit: 'F', UnitType: 18, Value: 91 }, Minimum: { Unit: 'F', UnitType: 18, Value: 72 } },
  RealFeelTemperatureShade: { Maximum: { Unit: 'F', UnitType: 18, Value: 81 }, Minimum: { Unit: 'F', UnitType: 18, Value: 72 } },
  Sources: ['AccuWeather'],
  Sun: { EpochRise: 1630379640, EpochSet: 1630425900, Rise: '2021-08-31T06:14:00+03:00', Set: '2021-08-31T19:05:00+03:00' },
  Temperature: { Maximum: { Unit: 'F', UnitType: 18, Value: 84 }, Minimum: { Unit: 'F', UnitType: 18, Value: 73 } },
};

export const currConditionsDetailsMock: CurrentConditionsDetaildType = {
  Ceiling: { Metric: { Value: 12192.0, Unit: 'm', UnitType: 5 }, Imperial: { Value: 40000.0, Unit: 'ft', UnitType: 0 } },
  LocalObservationDateTime: '2021-08-30T20:35:00+03:00 ',
  EpochTime: 1630344900,
  WeatherText: 'Mostly clear ',
  WeatherIcon: 34,
  HasPrecipitation: false,
  PrecipitationType: null,
  IsDayTime: false,
  Temperature: { Metric: { Value: 23.9, Unit: 'C', UnitType: 17 }, Imperial: { Value: 75.0, Unit: 'F', UnitType: 18 } },
  RealFeelTemperature: { Metric: { Value: 24.5, Unit: 'C', UnitType: 17 }, Imperial: { Value: 76.0, Unit: 'F', UnitType: 18 } },
  RealFeelTemperatureShade: { Metric: { Value: 24.5, Unit: 'C', UnitType: 17 }, Imperial: { Value: 76.0, Unit: 'F', UnitType: 18 } },
  RelativeHumidity: 85,
  IndoorRelativeHumidity: 85,
  DewPoint: { Metric: { Value: 21.2, Unit: 'C', UnitType: 17 }, Imperial: { Value: 70.0, Unit: 'F', UnitType: 18 } },
  Wind: {
    Direction: { Degrees: 293, Localized: 'WNW', English: 'WNW' },
    Speed: { Metric: { Value: 19.6, Unit: 'km/h', UnitType: 7 }, Imperial: { Value: 12.2, Unit: 'mi/h', UnitType: 9 } },
  },
  WindGust: { Speed: { Metric: { Value: 30.3, Unit: 'km/h', UnitType: 7 }, Imperial: { Value: 18.8, Unit: 'mi/h', UnitType: 9 } } },
  UVIndex: 0,
  UVIndexText: 'Low',
  Visibility: { Metric: { Value: 16.1, Unit: 'km', UnitType: 6 }, Imperial: { Value: 10.0, Unit: 'mi', UnitType: 2 } },
  ObstructionsToVisibility: ' ',
  CloudCover: 14,
  Pressure: { Metric: { Value: 1013.0, Unit: 'mb', UnitType: 14 }, Imperial: { Value: 29.91, Unit: 'inHg', UnitType: 12 } },
  PressureTendency: { LocalizedText: 'Steady ', Code: 'S' },
  Past24HourTemperatureDeparture: { Metric: { Value: 0.4, Unit: 'C', UnitType: 17 }, Imperial: { Value: 1.0, Unit: 'F', UnitType: 18 } },
  ApparentTemperature: { Metric: { Value: 26.1, Unit: 'C', UnitType: 17 }, Imperial: { Value: 79.0, Unit: 'F', UnitType: 18 } },
  WindChillTemperature: { Metric: { Value: 23.9, Unit: 'C', UnitType: 17 }, Imperial: { Value: 75.0, Unit: 'F', UnitType: 18 } },
  WetBulbTemperature: { Metric: { Value: 22.1, Unit: 'C', UnitType: 17 }, Imperial: { Value: 72.0, Unit: 'F', UnitType: 18 } },
  Precip1hr: { Metric: { Value: 0.0, Unit: 'mm', UnitType: 3 }, Imperial: { Value: 0.0, Unit: 'in', UnitType: 1 } },
  PrecipitationSummary: {
    Precipitation: { Metric: { Value: 0.0, Unit: 'mm', UnitType: 3 }, Imperial: { Value: 0.0, Unit: 'in', UnitType: 1 } },
    PastHour: { Metric: { Value: 0.0, Unit: 'mm', UnitType: 3 }, Imperial: { Value: 0.0, Unit: 'in', UnitType: 1 } },
    Past3Hours: { Metric: { Value: 0.0, Unit: 'mm', UnitType: 3 }, Imperial: { Value: 0.0, Unit: 'in', UnitType: 1 } },
    Past6Hours: { Metric: { Value: 0.0, Unit: 'mm', UnitType: 3 }, Imperial: { Value: 0.0, Unit: 'in', UnitType: 1 } },
    Past9Hours: { Metric: { Value: 0.0, Unit: 'mm', UnitType: 3 }, Imperial: { Value: 0.0, Unit: 'in', UnitType: 1 } },
    Past12Hours: { Metric: { Value: 0.0, Unit: 'mm', UnitType: 3 }, Imperial: { Value: 0.0, Unit: 'in', UnitType: 1 } },
    Past18Hours: { Metric: { Value: 0.0, Unit: 'mm', UnitType: 3 }, Imperial: { Value: 0.0, Unit: 'in', UnitType: 1 } },
    Past24Hours: { Metric: { Value: 0.0, Unit: 'mm', UnitType: 3 }, Imperial: { Value: 0.0, Unit: 'in', UnitType: 1 } },
  },
  TemperatureSummary: {
    Past6HourRange: {
      Minimum: { Metric: { Value: 23.9, Unit: 'C', UnitType: 17 }, Imperial: { Value: 75.0, Unit: 'F', UnitType: 18 } },
      Maximum: { Metric: { Value: 30.0, Unit: 'C', UnitType: 17 }, Imperial: { Value: 86.0, Unit: 'F', UnitType: 18 } },
    },
    Past12HourRange: {
      Minimum: { Metric: { Value: 21.6, Unit: 'C', UnitType: 17 }, Imperial: { Value: 71.0, Unit: 'F', UnitType: 18 } },
      Maximum: { Metric: { Value: 30.0, Unit: 'C', UnitType: 17 }, Imperial: { Value: 86.0, Unit: 'F', UnitType: 18 } },
    },
    Past24HourRange: {
      Minimum: { Metric: { Value: 19.7, Unit: 'C', UnitType: 17 }, Imperial: { Value: 68.0, Unit: 'F', UnitType: 18 } },
      Maximum: { Metric: { Value: 30.0, Unit: 'C', UnitType: 17 }, Imperial: { Value: 86.0, Unit: 'F', UnitType: 18 } },
    },
  },
  MobileLink: 'http://www.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us ',
  Link: 'http://www.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us ',
};

export const getCurrentConditionsMock = async () => {
  await delay(3000);
  return currConditionsDetailsMock;
};

export const get5DaysDailyForecastsMock = async () => {
  const dayOne = Object.assign({}, oneDayForecastDetailes);
  const dayTwo = Object.assign({}, oneDayForecastDetailes);
  const dayThree = Object.assign({}, oneDayForecastDetailes);
  const dayFour = Object.assign({}, oneDayForecastDetailes);
  const dayFive = Object.assign({}, oneDayForecastDetailes);
  Object.assign(dayTwo, {
    Day: {
      CloudCover: 6,
      Evapotranspiration: { Unit: 'in', UnitType: 1, Value: 0.21 },
      HasPrecipitation: false,
      HoursOfIce: 0,
      HoursOfPrecipitation: 0,
      HoursOfRain: 0,
      HoursOfSnow: 0,
      Ice: { Unit: 'in', UnitType: 1, Value: 0 },
      IceProbability: 0,
      Icon: 1,
      IconPhrase: 'Sunny',
      LongPhrase: 'Sunny and pleasant',
      PrecipitationProbability: 0,
      Rain: { Unit: 'in', UnitType: 1, Value: 0 },
      RainProbability: 0,
      ShortPhrase: 'Sunny and pleasant',
      Snow: { Unit: 'in', UnitType: 1, Value: 0 },
      SnowProbability: 0,
      SolarIrradiance: { Unit: 'W/m²', UnitType: 33, Value: 108 },
      ThunderstormProbability: 0,
      TotalLiquid: { Unit: 'in', UnitType: 1, Value: 0 },
      Wind: {
        Direction: { Degrees: 293, Localized: 'WNW', English: 'WNW' },
        Speed: { Metric: { Value: 19.6, Unit: 'km/h', UnitType: 7 }, Imperial: { Value: 12.2, Unit: 'mi/h', UnitType: 9 } },
      },
      WindGust: {
        Direction: { Degrees: 293, Localized: 'WNW', English: 'WNW' },
        Speed: { Metric: { Value: 19.6, Unit: 'km/h', UnitType: 7 }, Imperial: { Value: 12.2, Unit: 'mi/h', UnitType: 9 } },
      },
    },
  });
  Object.assign(dayThree, {
    Day: {
      CloudCover: 6,
      Evapotranspiration: { Unit: 'in', UnitType: 1, Value: 0.21 },
      HasPrecipitation: false,
      HoursOfIce: 0,
      HoursOfPrecipitation: 0,
      HoursOfRain: 0,
      HoursOfSnow: 0,
      Ice: { Unit: 'in', UnitType: 1, Value: 0 },
      IceProbability: 0,
      Icon: 1,
      IconPhrase: 'Sunny',
      LongPhrase: 'Sunny and pleasant',
      PrecipitationProbability: 0,
      Rain: { Unit: 'in', UnitType: 1, Value: 0 },
      RainProbability: 0,
      ShortPhrase: 'Sunny and pleasant',
      Snow: { Unit: 'in', UnitType: 1, Value: 0 },
      SnowProbability: 0,
      SolarIrradiance: { Unit: 'W/m²', UnitType: 33, Value: 108 },
      ThunderstormProbability: 0,
      TotalLiquid: { Unit: 'in', UnitType: 1, Value: 0 },
      Wind: {
        Direction: { Degrees: 293, Localized: 'WNW', English: 'WNW' },
        Speed: { Metric: { Value: 19.6, Unit: 'km/h', UnitType: 7 }, Imperial: { Value: 12.2, Unit: 'mi/h', UnitType: 9 } },
      },
      WindGust: {
        Direction: { Degrees: 293, Localized: 'WNW', English: 'WNW' },
        Speed: { Metric: { Value: 19.6, Unit: 'km/h', UnitType: 7 }, Imperial: { Value: 12.2, Unit: 'mi/h', UnitType: 9 } },
      },
    },
  });
  Object.assign(dayFour, {
    Day: {
      CloudCover: 6,
      Evapotranspiration: { Unit: 'in', UnitType: 1, Value: 0.21 },
      HasPrecipitation: false,
      HoursOfIce: 0,
      HoursOfPrecipitation: 0,
      HoursOfRain: 0,
      HoursOfSnow: 0,
      Ice: { Unit: 'in', UnitType: 1, Value: 0 },
      IceProbability: 0,
      Icon: 1,
      IconPhrase: 'Sunny',
      LongPhrase: 'Sunny and pleasant',
      PrecipitationProbability: 0,
      Rain: { Unit: 'in', UnitType: 1, Value: 0 },
      RainProbability: 0,
      ShortPhrase: 'Sunny and pleasant',
      Snow: { Unit: 'in', UnitType: 1, Value: 0 },
      SnowProbability: 0,
      SolarIrradiance: { Unit: 'W/m²', UnitType: 33, Value: 108 },
      ThunderstormProbability: 0,
      TotalLiquid: { Unit: 'in', UnitType: 1, Value: 0 },
      Wind: {
        Direction: { Degrees: 293, Localized: 'WNW', English: 'WNW' },
        Speed: { Metric: { Value: 19.6, Unit: 'km/h', UnitType: 7 }, Imperial: { Value: 12.2, Unit: 'mi/h', UnitType: 9 } },
      },
      WindGust: {
        Direction: { Degrees: 293, Localized: 'WNW', English: 'WNW' },
        Speed: { Metric: { Value: 19.6, Unit: 'km/h', UnitType: 7 }, Imperial: { Value: 12.2, Unit: 'mi/h', UnitType: 9 } },
      },
    },
  });
  Object.assign(dayFive, {
    Day: {
      CloudCover: 6,
      Evapotranspiration: { Unit: 'in', UnitType: 1, Value: 0.21 },
      HasPrecipitation: false,
      HoursOfIce: 0,
      HoursOfPrecipitation: 0,
      HoursOfRain: 0,
      HoursOfSnow: 0,
      Ice: { Unit: 'in', UnitType: 1, Value: 0 },
      IceProbability: 0,
      Icon: 1,
      IconPhrase: 'Sunny',
      LongPhrase: 'Sunny and pleasant',
      PrecipitationProbability: 0,
      Rain: { Unit: 'in', UnitType: 1, Value: 0 },
      RainProbability: 0,
      ShortPhrase: 'Sunny and pleasant',
      Snow: { Unit: 'in', UnitType: 1, Value: 0 },
      SnowProbability: 0,
      SolarIrradiance: { Unit: 'W/m²', UnitType: 33, Value: 108 },
      ThunderstormProbability: 0,
      TotalLiquid: { Unit: 'in', UnitType: 1, Value: 0 },
      Wind: {
        Direction: { Degrees: 293, Localized: 'WNW', English: 'WNW' },
        Speed: { Metric: { Value: 19.6, Unit: 'km/h', UnitType: 7 }, Imperial: { Value: 12.2, Unit: 'mi/h', UnitType: 9 } },
      },
      WindGust: {
        Direction: { Degrees: 293, Localized: 'WNW', English: 'WNW' },
        Speed: { Metric: { Value: 19.6, Unit: 'km/h', UnitType: 7 }, Imperial: { Value: 12.2, Unit: 'mi/h', UnitType: 9 } },
      },
    },
  });
  dayTwo.Day.Icon = 17;
  dayThree.Day.Icon = 8;
  dayFour.Day.Icon = 23;
  dayFive.Day.Icon = 17;
  await delay(3000);
  return [dayOne, dayTwo, dayThree, dayFour, dayFive];
};
