var Sequelize = require('sequelize'); 
var db1 = require('../config/database1.js');

var Listing = db1.define('Listing', {
  title: {type: Sequelize.STRING(30)},
  zipcode: Sequelize.INTEGER,
  takerId: { type: Sequelize.INTEGER, defaultValue: null },
  giverId: { type: Sequelize.INTEGER, defaultValue: null },
  status: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 0 },
  picReference: Sequelize.STRING,
  category: Sequelize.STRING,
  description: Sequelize.STRING,
  condition: Sequelize.INTEGER,
  giverRating: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 0 },
  takerRating: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 0 },
  stateUSA: Sequelize.STRING,
  coordinates: { type: Sequelize.STRING, defaultValue: '0, 0' },
});

Listing.sync({ force: false });
// Archive.sync({ force: false });
// Listing.sync({ force: false });
module.exports = Listing;