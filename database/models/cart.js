
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    uuid: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    user_uuid: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: 'Users',
        key: 'uuid'
      }
    },
    product_uuid: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: 'Products',
        key: 'uuid'
      }
    },
  }, {
      timestamps: true,
      underscoreAll: true,
      underscore: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    });
  Cart.associate = (models) => {
    Cart.belongsTo(
      models.User, { foreignKey: 'user_uuid' }
    );
    Cart.belongsTo(
      models.Product, { foreignKey: 'product_uuid' }
    );
  };
  return Cart;
};
