'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    uuid: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    is_admin: DataTypes.BOOLEAN,
    password: DataTypes.STRING
  }, {
    timestamps: true,
    underscoreAll: true,
    underscore: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  User.associate = function (models) {
    User.belongsToMany(models.Product, { foreignKey: 'user_uuid', through: 'Carts', as: 'products' });
  };
  return User;
};
