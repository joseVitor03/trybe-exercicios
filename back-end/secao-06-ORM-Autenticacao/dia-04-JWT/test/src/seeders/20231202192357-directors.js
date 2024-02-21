'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('directors', [
      { nome: 'John Lasseter' }, 
      { nome: 'Andrew Stanton' }, 
      { nome: 'Pete Docter' }, 
      { nome: 'Brad Bird' }, 
      { nome: 'Lee Unkrich' }, 
      { nome: 'Mark Andrews' },
      { nome: 'Dan Scanlon' },
      { nome: 'Peter Sohn' },
      { nome: 'Brian Fee' },
      { nome: 'Josh Cooley' },
      { nome: 'Enrico Casarosa' }
    ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('directors', null, {})
  }
};
