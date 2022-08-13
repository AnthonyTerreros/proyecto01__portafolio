require("dotenv").config();

module.exports = {
  development: {
    username: process.env.USER_DB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: "postgres",
  },
  test: {
    username: process.env.USER_DB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: "postgres",
  },
  production: {
    username: process.env.USER_DB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: "postgres",
  },
  define: {
    freezeTableName: true,
  },
};
