'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    uuid: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    user_uuid: {
      type: DataTypes.UUID,
      allowNull: false
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    category: DataTypes.ENUM('electronics', 'clothes', 'books'),
    price: DataTypes.FLOAT,
    image_url: DataTypes.STRING,
    in_stock: DataTypes.BOOLEAN
  }, {
    timestamps: true,
    underscoreAll: true,
    underscore: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  Product.associate = function(models) {
    Product.belongsToMany(models.User, {through: 'Carts', foreignKey: 'product_uuid', as: 'users'})
  };
  return Product;
};
