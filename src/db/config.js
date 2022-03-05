import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
  development: {
    HOST: "127.0.0.1", //process.env.DEV_DB_HOST,
    USER: process.env.DEV_DB_USER,
    PASSWORD: process.env.DEV_DB_PASS,
    DB: process.env.DEV_DB,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  },
  test: {
    HOST: "127.0.0.1", //process.env.DEV_DB_HOST,
    USER: process.env.TEST_DB_USER,
    PASSWORD: process.env.TEST_DB_PASS,
    DB: process.env.TEST_DB,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  },
  production: {
    HOST: "us-cdbr-east-05.cleardb.net", //"127.0.0.1", //process.env.DEV_DB_HOST,
    USER: "bba3bc97470b60", //process.env.PDN_DB_USER,
    PASSWORD: "4b191fb5", //process.env.PDN_DB_PASS,
    DB: "heroku_67f3cf2fb6c95b6", // process.env.PDN_DB,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000 
    },
  }
}

export default dbConfig;
