'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('films', [
    { nome: "Toy Story", anoLancamento: 1995, diretorId: 1 },
  { nome: "Vida de Inseto", anoLancamento: 1998, diretorId: 2 },
  { nome: "Toy Story 2", anoLancamento: 1999, diretorId: 1 },
  { nome: "Monstros S.A.", anoLancamento: 2001, diretorId: 3 },
  { nome: "Procurando Nemo", anoLancamento: 2003, diretorId: 2 },
  { nome: "Os Incríveis", anoLancamento: 2004, diretorId: 4 },
  { nome: "Carros", anoLancamento: 2006, diretorId: 1 },
  { nome: "Ratatouille", anoLancamento: 2007, diretorId: 4 },
  { nome: "WALL-E", anoLancamento: 2008, diretorId: 2 },
  { nome: "Up: Altas Aventuras", anoLancamento: 2009, diretorId: 3 },
  { nome: "Toy Story 3", anoLancamento: 2010, diretorId: 5 },
  { nome: "Carros 2", anoLancamento: 2011, diretorId: 1 },
  { nome: "Valente", anoLancamento: 2012, diretorId: 6 },
  { nome: "Universidade Monstros", anoLancamento: 2013, diretorId: 7 },
  { nome: "Divertida Mente",  anoLancamento: 2015, diretorId: 3 },
  { nome: "O Bom Dinossauro", anoLancamento: 2015, diretorId: 8 },
  { nome: "Procurando Dory", anoLancamento: 2016, diretorId: 2 },
  { nome: "Carros 3", anoLancamento: 2017, diretorId: 9 },
  { nome: "Viva: A Vida é uma Festa",  anoLancamento: 2017, diretorId: 5 },
  { nome: "Os Incríveis 2", anoLancamento: 2018, diretorId: 4 },
  { nome: "Toy Story 4",  anoLancamento: 2019, diretorId: 10 },
  { nome: "Dois Irmãos: Uma Jornada Fantástica", anoLancamento: 2020, diretorId: 7 },
  { nome: "Soul", anoLancamento: 2020, diretorId: 3 },
  { nome: "Luca", anoLancamento: 2021, diretorId: 11 }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
