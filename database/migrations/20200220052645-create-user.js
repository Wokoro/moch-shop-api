module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    uuid: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    isadmin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    password: {
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('Now()')
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('Now()')
    }
  }),
  down: queryInterface => queryInterface.dropTable('Users')
};
