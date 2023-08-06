'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('band', [
      {
        name: 'Oriole Fugitives',
        genre: 'Indie',
        available_start_time: '12:00:00',
        end_time: '18:00:00'
      },
      {
        name: 'The Codfish Optimist',
        genre: 'Alternative',
        available_start_time: '14:00:00',
        end_time: '19:00:00'
      },
      {
        name: 'Exploiter Impedance',
        genre: 'Pop',
        available_start_time: '16:00:00',
        end_time: '21:00:00'
      },
      {
        name: 'The Underdone',
        genre: 'Rock',
        available_start_time: '18:00:00',
        end_time: '23:00:00'
      },
      {
        name: 'Ague Tertiary',
        genre: 'Indie',
        available_start_time: '19:00:00',
        end_time: '23:00:00'
      },
      {
        name: 'The Bystander Mistakes',
        genre: 'Alternative',
        available_start_time: '17:00:00',
        end_time: '22:00:00'
      },
      {
        name: 'Collide Applicant',
        genre: 'Oldies',
        available_start_time: '21:00:00',
        end_time: '23:00:00'
      },
      {
        name: 'Apricot Symptoms',
        genre: 'Metal',
        available_start_time: '15:00:00',
        end_time: '20:00:00'
      },
      {
        name: 'Olden Fearless',
        genre: 'Metal',
        available_start_time: '14:00:00',
        end_time: '19:00:00'
      },
      {
        name: 'Rhymes Of',
        genre: 'Folk',
        available_start_time: '13:00:00',
        end_time: '19:00:00'
      },
    ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('band', null, {})
  }
};
