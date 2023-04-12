require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const { Sequelize } = require("sequelize");

// ======================== Models requires
const pokemonDefiner = require("./models/Pokemon");
const typeDefiner = require("./models/Type");

// ======================== Sequelize
const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {
        logging: true, // set to console.log to see the raw SQL queries
        native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
);

// ======================== Models definers
pokemonDefiner(sequelize);
typeDefiner(sequelize);
const { Pokemon, Type } = sequelize.models;

// ======================== Models relations
// Product.hasMany(Reviews);

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize,
};
