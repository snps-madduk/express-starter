import 'dotenv/config';

// const {
//   DB_FILE,
// } = process.env;

const defaultConfig = {
  dialect: 'sqlite',
  storage: 'sqlite.db',
};

export const development = {
  ...defaultConfig,
};

export const test = {
  ...defaultConfig,
  logging: false,
};

export const production = {
  ...defaultConfig,
  logging: false,
};
