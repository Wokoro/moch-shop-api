'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    category: DataTypes.ENUM('electronics', 'clothes', 'books'),
    price: DataTypes.FLOAT,
    image_url: DataTypes.STRING,
    in_stock: DataTypes.BOOLEAN
  }, {});
  Product.associate = function(models) {
    Product.belongsToMany(models.User, {through: 'Carts', foreignKey: 'product_uuid', as: 'users'})
  };
  return Product;
};
