
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Products', {
    uuid: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    user_uuid: {
      type: Sequelize.UUID,
      allowNull: false
    },
    description: {
      allowNull: false,
      type: Sequelize.STRING
    },
    category: {
      allowNull: false,
      type: Sequelize.ENUM('electronics', 'clothes', 'books')
    },
    price: {
      allowNull: false,
      type: Sequelize.FLOAT
    },
    image_url: {
      allowNull: false,
      type: Sequelize.STRING
    },
    in_stock: {
      allowNull: false,
      type: Sequelize.BOOLEAN
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('NOW()')
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('NOW()')
    }
  }),
  down: (queryInterface) => queryInterface.dropTable('Products')
};
