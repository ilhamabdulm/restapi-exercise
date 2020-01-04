'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', [
      {
        name: 'John Doe',
        phone: '081385784854',
        email: 'john@doe.com',
        address: 'Jalan Melati 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Levis Doe',
        phone: '08994452875',
        email: 'levis@doe.com',
        address: 'Jalan Melati 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Abraham Doe',
        phone: '081385743245',
        email: 'abraham@doe.com',
        address: 'Jalan Melati 3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jamaludin Malik',
        phone: '081283577854',
        email: 'jamal@udin.com',
        address: 'Jalan Kenanga 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Shani Gracia',
        phone: '081278914854',
        email: 'shani@gracia.com',
        address: 'Jalan Tulip 2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
