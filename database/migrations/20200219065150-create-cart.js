
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Carts', {
    uuid: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    user_uuid: {
      type: Sequelize.UUID,
      references: {
        model: 'Users',
        key: 'uuid'
      }
    },
    product_uuid: {
      type: Sequelize.UUID,
      references: {
        model: 'Products',
        key: 'uuid'
      }
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: queryInterface => queryInterface.dropTable('Carts')
};
