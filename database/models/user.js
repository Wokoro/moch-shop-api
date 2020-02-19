'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    is_admin: DataTypes.BOOLEAN,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Product, {foreignKey: 'user_uuid', through: 'Carts', as: 'products'});
  };
  return User;
};
