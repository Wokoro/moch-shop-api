
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Products', {
    uuid: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    user_uuid: {
      allowNull: false,
      type: Sequelize.UUID
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    category: {
      type: Sequelize.ENUM('clothes', 'electronics', 'book')
    },
    price: {
      type: Sequelize.FLOAT
    },
    imageUrl: {
      type: Sequelize.STRING
    },
    inStock: {
      type: Sequelize.BOOLEAN
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('Now()')
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('Now()')
    }
  }),
  down: queryInterface => queryInterface.dropTable('Products')
};
