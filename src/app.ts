import { HungarianRegionalReverseGeocoder } from './hungarian-reverse-geocoder';
import { MongoBasedReverseGeocoder } from './mongo-reverse-geocoder';
import * as http from 'http';
import * as express from 'express';
import * as mongoose from 'mongoose';
import { mongoLink } from './config';

mongoose.connect(mongoLink, { poolSize: 3 }, (error) => {
  if (error) {
    console.error(`Failed to connect to the database ${mongoLink}: ${error}`);
    process.exit(1);
  } else {
    console.error(`Mongoose connected to MongoDB:  ${mongoLink}}`);
  }
});

const revGeo = new MongoBasedReverseGeocoder();
const huRevGeo = new HungarianRegionalReverseGeocoder();
const app = express();
app
  .get(
    '/revgeo/:lon,:lat',
    async (req: express.Request, res: express.Response) => {
      const reverseGeocodedData = await revGeo.getGeoInformation([
        Number(req.params.lon),
        Number(req.params.lat),
      ]);
      res.json(reverseGeocodedData);
    },
  )
  .get(
    '/revgeo-hu/:lon,:lat',
    async (req: express.Request, res: express.Response) => {
      const reverseGeocodedData = await huRevGeo.getRegionalInformation([
        Number(req.params.lon),
        Number(req.params.lat),
      ]);
      res.json(reverseGeocodedData);
    },
  );

const server = http.createServer(app);
server.listen(8889);
