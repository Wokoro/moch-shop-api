import uuid from 'uuid';
import { encryptPassword } from '../../utils';

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    uuid: uuid(),
    firstname: 'John',
    lastname: 'Doe',
    email: 'johndoe@yahoo.com',
    password: encryptPassword('required'),
    is_admin: true
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {})
};
