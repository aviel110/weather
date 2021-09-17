export enum TempUnits {
  C = 'C',
  F = 'F',
}

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

export type LocationTypeProps = {
  location: LocationType;
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

export type CurrentConditionsDetaildType = {
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

type AirAndPollenType = { Category: string; CategoryValue: number; Name: string; Type?: string; Value: number }[];

type dayNightDetailsType = {
  CloudCover: number;
  Evapotranspiration: TempRepresentationType;
  HasPrecipitation: boolean;
  HoursOfIce: number;
  HoursOfPrecipitation: number;
  HoursOfRain: number;
  HoursOfSnow: number;
  Ice: TempRepresentationType;
  IceProbability: number;
  Icon: number;
  IconPhrase: string;
  LongPhrase: string;
  PrecipitationProbability: number;
  Rain: TempRepresentationType;
  RainProbability: number;
  ShortPhrase: string;
  Snow: TempRepresentationType;
  SnowProbability: number;
  SolarIrradiance: TempRepresentationType;
  ThunderstormProbability: number;
  TotalLiquid: TempRepresentationType;
  Wind: { Direction: { Degrees: number; English: string; Localized: string }; Speed: ImperialMetricValueType };
  WindGust: { Direction: { Degrees: number; English: string; Localized: string }; Speed: ImperialMetricValueType };
};

export type DailyForecastDetailedType = {
  AirAndPollen: AirAndPollenType;
  Date: string;
  Day: dayNightDetailsType;
  DegreeDaySummary: { Cooling: TempRepresentationType; Heating: TempRepresentationType };
  EpochDate: number;
  HoursOfSun: number;
  Link: string;
  MobileLink: string;
  Moon: { Age: number; EpochRise: number | null; EpochSet: number | null; Phase: string; Rise: string | null; Set: string };
  Night: dayNightDetailsType;
  RealFeelTemperature: { Maximum: TempRepresentationType; Minimum: TempRepresentationType };
  RealFeelTemperatureShade: { Maximum: TempRepresentationType; Minimum: TempRepresentationType };
  Sources: string[];
  Sun: { EpochRise: number | null; EpochSet: number | null; Rise: string | null; Set: string | null };
  Temperature: { Maximum: TempRepresentationType; Minimum: TempRepresentationType };
};
