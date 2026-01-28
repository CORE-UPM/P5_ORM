const path = require("path");
const Sequelize = require('sequelize');

const config_file = process.env.DATABASE_CONFIG_PATH || path.resolve(path.join(__dirname + '..', 'config', 'config.json'));
const config = require(config_file);

const sequelize =     // Rellene aqui ...


// Import Models

// Rellene aqui ...


// Relationships

// Rellene aqui ...


module.exports = exports = sequelize;
