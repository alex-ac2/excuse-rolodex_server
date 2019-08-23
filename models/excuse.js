'use strict';
module.exports = (sequelize, DataTypes) => {
  const Excuse = sequelize.define('Excuse', {
    userId: DataTypes.STRING,
    caption: DataTypes.STRING,
    category: DataTypes.STRING
  }, {});
  Excuse.associate = function(models) {
    // associations can be defined here
  };
  return Excuse;
};