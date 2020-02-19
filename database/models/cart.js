'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    user_uuid: DataTypes.UUID,
    product_uuid: DataTypes.UUID
  }, {});
  Cart.associate = function(models) {
    Cart.belongsTo(models.User, {foreignKey: 'user_uuid'})
    Cart.belongsTo(models.Product, {foreignKey: 'product_uuid'})
  };
  return Cart;
};
