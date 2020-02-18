
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    uuid: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING
    },
    user_uuid: {
      allowNull: false,
      type: DataTypes.UUID
    },
    description: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.ENUM('clothes', 'electronics', 'book')
    },
    price: {
      type: DataTypes.FLOAT
    },
    imageUrl: {
      type: DataTypes.STRING
    },
    inStock: {
      type: DataTypes.BOOLEAN,
      set(value) {
        if (value === 'true') value = true;
        if (value === 'false') value = false;
        this.setDataValue('inStock', value);
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  Product.associate = () => {};
  return Product;
};
