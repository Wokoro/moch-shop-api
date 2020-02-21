

import uuid from 'uuid/v4';

const admin_uuid = '138eab76-bf3d-48be-9dc7-52136376f04d';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Products', [
    {
      uuid: uuid(),
      user_uuid: admin_uuid,
      name: 'shoes',
      description: 'Mega plants making',
      category: 'clothes',
      price: 23.00,
      imageUrl: 'http://softworld/shoes.png',
      inStock: true,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: uuid(),
      user_uuid: admin_uuid,
      name: 'Mouse',
      description: 'Bluethoot powered mouse',
      category: 'electronics',
      price: 4880.00,
      imageUrl: 'http://softworld/mouse.png',
      inStock: true,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: uuid(),
      user_uuid: admin_uuid,
      name: 'Desktop',
      description: 'Complete Desktop',
      category: 'electronics',
      price: 94000.00,
      imageUrl: 'http://softworld/desktop.png',
      inStock: true,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: uuid(),
      user_uuid: admin_uuid,
      name: 'Samsung J5',
      description: 'Samsung phone with high quality camera',
      category: 'electronics',
      price: 50000.00,
      imageUrl: 'http://softworld/phone.png',
      inStock: true,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: uuid(),
      user_uuid: admin_uuid,
      name: 'Polo shirts',
      description: 'Body fitted shirts',
      category: 'clothes',
      price: 2000.00,
      imageUrl: 'http://softworld/shirts.png',
      inStock: true,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: uuid(),
      user_uuid: admin_uuid,
      name: 'Mega microphone',
      description: '257KHZ Microphone',
      category: 'electronics',
      price: 20000.00,
      imageUrl: 'http://softworld/megaphone.png',
      inStock: true,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: uuid(),
      user_uuid: admin_uuid,
      name: 'Canon Camera',
      description: '500px ultra high quality camera',
      category: 'electronics',
      price: 20000.00,
      imageUrl: 'http://softworld/megacam.png',
      inStock: true,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: uuid(),
      user_uuid: admin_uuid,
      name: 'shoes',
      description: 'Mega plants making',
      category: 'clothes',
      price: 23.00,
      imageUrl: 'http://softworld',
      inStock: true,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: uuid(),
      user_uuid: admin_uuid,
      name: 'shoes',
      description: 'Mega plants making',
      category: 'clothes',
      price: 23.00,
      imageUrl: 'http://softworld',
      inStock: true,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: uuid(),
      user_uuid: admin_uuid,
      name: 'shoes',
      description: 'Mega plants making',
      category: 'clothes',
      price: 23.00,
      imageUrl: 'http://softworld',
      inStock: true,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: uuid(),
      user_uuid: admin_uuid,
      name: 'shoes',
      description: 'Mega plants making',
      category: 'clothes',
      price: 23.00,
      imageUrl: 'http://softworld',
      inStock: true,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: uuid(),
      user_uuid: admin_uuid,
      name: 'shoes',
      description: 'Mega plants making',
      category: 'clothes',
      price: 23.00,
      imageUrl: 'http://softworld',
      inStock: true,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: uuid(),
      user_uuid: admin_uuid,
      name: 'shoes',
      description: 'Mega plants making',
      category: 'clothes',
      price: 23.00,
      imageUrl: 'http://softworld',
      inStock: true,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: uuid(),
      user_uuid: admin_uuid,
      name: 'shoes',
      description: 'Mega plants making',
      category: 'clothes',
      price: 23.00,
      imageUrl: 'http://softworld',
      inStock: true,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: uuid(),
      user_uuid: admin_uuid,
      name: 'shoes',
      description: 'Fitted clothes',
      category: 'clothes',
      price: 23.00,
      imageUrl: 'http://softworld',
      inStock: true,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    }
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Products', null, {})
};
