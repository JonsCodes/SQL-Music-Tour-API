'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stage', [
      {
        name: 'Vibe',
        capacity: 100
      },
      {
        name: 'BeatRoot',
        capacity: 500
      },
      {
        name: 'Ear Worm',
        capacity: 1000
      },
      {
        name: 'Octavium',
        capacity: 200
      },
      {
        name: 'Purple',
        capacity: 10000
      },
      {
        name: 'Phoenix',
        capacity: 60000
      },
      {
        name: 'Vuvuzela',
        capacity: 6000
      },
      {
        name: 'Mega Lounge',
        capacity: 800
      },
      {
        name: 'Garage',
        capacity: 40
      },
      {
        name: 'Bonobo',
        capacity: 1200
      },
    ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stage', null, {});
  }
};
