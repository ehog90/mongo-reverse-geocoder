const configReader = require('yml-config-reader');

export const config = configReader.getByFiles('../config.yml');

export const mongoLink = `mongodb://${config?.db?.host}/${config?.db?.db}`;
