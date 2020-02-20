
import uuid from 'uuid';

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    uuid: uuid(),
    firstname: 'John',
    lastname: 'Doe',
    email: 'johndoe@yahoo.com',
    password: 'required',
    isadmin: true
  }], {}),

  down: (queryInterface) => {
    queryInterface.bulkDelete('Users', null, {});
  }
};
