import Sequelize from "sequelize";
import dotenv from "dotenv";
import dbConfig from "./config.js";

dotenv.config();

const env = process.env.ENV || "development";
const dbEnv = dbConfig[env];
export const sequelize = new Sequelize(dbEnv.DB, dbEnv.USER, dbEnv.PASSWORD, {
  host: dbEnv.HOST,
  dialect: dbEnv.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbEnv.pool.max,
    min: dbEnv.pool.min,
    acquire: dbEnv.pool.acquire,
    idle: dbEnv.pool.idle,
  },
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Well connected.");
  })
  .catch((err) => {
    console.error("Not connected, here is the error:", err);
  });
