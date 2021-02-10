import * as mongoose from 'mongoose';
import { ISettlementDocument } from './interfaces';

const mongoSettlementSchema = new mongoose.Schema({
  type: String,
  properties: Object,
  geometry: {
    coordinates: { type: [Number], index: '2dsphere' },
    type: String,
  },
});

export const SettlementsModel = mongoose.model<ISettlementDocument>(
  'settlements',
  mongoSettlementSchema,
);
