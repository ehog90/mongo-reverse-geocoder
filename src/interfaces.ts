import * as mongoose from 'mongoose';

export interface ISettlementDocument extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  properties: any;
  geometry: {
    type: string;
    coordinates: number[];
  };
}

export interface IGeoAddress {
  cc: string;
  regDef: string;
  sRegDef: string;
  smDef: string;
  strDef: string;
  suburbDef: string;
  sm_hun?: string;
}

export interface IHungarianRegionalInformation {
  isInHungary: boolean;
  regionalData?: {
    countyName: string;
    regionalUnitName: string;
  };
}

export interface IReverseGeoCoderAsync {
  getGeoInformation(latLonPair: number[]): Promise<IGeoAddress>;
}
export interface ICountryReverseGeoCoderAsync {
  getCountryData(latLonPair: number[]): Promise<ICountryReverseGeoCodeResult>;
}

export interface IHungarianRegionalReverseGeoCoder {
  getRegionalInformation(
    latLonPair: number[],
  ): Promise<IHungarianRegionalInformation>;
}

export interface ICountryReverseGeoCodeResult {
  cc: string;
  seaData: any;
}
