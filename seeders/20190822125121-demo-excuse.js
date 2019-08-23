'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Excuses', [{
      userId: null,
      caption: 'Take my sister to the doctor',
      category: 'medical',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Excuses', null, {});
  }
};
