export interface IAQICNScale {
  [key: string]: {
    aqi: number;
    color: string;
  };
}

export interface ILocationDetails {
  city: string;
  aqi: number;
  lastUpdated: string;
  category: string;
  color: string;
}

export interface IAllLocationDetails {
  [city: string]: ILocationDetails;
}
