type AdministrativeAreaType = {
  ID: string;
  LocalizedName: string;
};

type CountryType = {
  ID: string;
  LocalizedName: string;
};

export type TempRepresentationType = {
  Unit: string;
  UnitType: number;
  Value: number;
};

export type ImperialMetricValueType = { Imperial: TempRepresentationType; Metric: TempRepresentationType };
export type ImperialMetricValueMinMaxRangeType = {
  Minimum: ImperialMetricValueType;
  Maximum: ImperialMetricValueType;
};

export type LocationType = {
  AdministrativeArea: AdministrativeAreaType;
  Country: CountryType;
  Key: string;
  LocalizedName: string;
  Rank: number;
  Type: string;
  Version: number;
};

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

export type CurrentConditionsType = {
  EpochTime: number;
  HasPrecipitation: boolean;
  IsDayTime: boolean;
  Link: string;
  LocalObservationDateTime: string;
  MobileLink: string;
  PrecipitationType: any;
  Temperature: {
    Imperial: TempRepresentationType;
    Metric: TempRepresentationType;
  };
  WeatherIcon: number;
  WeatherText: string;
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

function delay(delayInms: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

export type LocationTypeProps = {
  location: LocationType;
};

export type CurrentConditionsDetailsType = {
  ApparentTemperature: ImperialMetricValueType;
  Ceiling: ImperialMetricValueType;
  CloudCover: number;
  DewPoint: ImperialMetricValueType;
  EpochTime: number; // TIMESTAMP ?
  HasPrecipitation: boolean;
  IndoorRelativeHumidity: number;
  IsDayTime: boolean;
  Link: string;
  LocalObservationDateTime: string;
  MobileLink: string;
  ObstructionsToVisibility: string;
  Past24HourTemperatureDeparture: ImperialMetricValueType;
  Precip1hr: ImperialMetricValueType;
  PrecipitationSummary: {
    Past12Hours: ImperialMetricValueType;
    Past18Hours: ImperialMetricValueType;
    Past24Hours: ImperialMetricValueType;
    Past3Hours: ImperialMetricValueType;
    Past6Hours: ImperialMetricValueType;
    Past9Hours: ImperialMetricValueType;
    PastHour: ImperialMetricValueType;
    Precipitation: ImperialMetricValueType;
  };
  PrecipitationType: any;
  Pressure: ImperialMetricValueType;
  PressureTendency: { Code: string; LocalizedText: string };
  RealFeelTemperature: ImperialMetricValueType;
  RealFeelTemperatureShade: ImperialMetricValueType;
  RelativeHumidity: number;
  Temperature: ImperialMetricValueType;
  TemperatureSummary: {
    Past12HourRange: ImperialMetricValueMinMaxRangeType;
    Past24HourRange: ImperialMetricValueMinMaxRangeType;
    Past6HourRange: ImperialMetricValueMinMaxRangeType;
  };
  UVIndex: number;
  UVIndexText: string;
  Visibility: ImperialMetricValueType;
  WeatherIcon: number;
  WeatherText: string;
  WetBulbTemperature: ImperialMetricValueType;
  Wind: { Direction: { Degrees: number; English: string; Localized: string }; Speed: ImperialMetricValueType };
  WindChillTemperature: ImperialMetricValueType;
  WindGust: { Speed: ImperialMetricValueType };
};

export const currConditionsDetailsMock: CurrentConditionsDetailsType = {
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
  return locConditionsMock;
};
