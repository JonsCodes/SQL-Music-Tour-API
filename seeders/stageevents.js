'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('stage_event', [
				{
					stage_id: 1,
					event_id: 1,
				},
				{
					stage_id: 2,
					event_id: 2,
				},
				{
					stage_id: 3,
					event_id: 3,
				},
				{
					stage_id: 4,
					event_id: 4,
				},
				{
					stage_id: 5,
					event_id: 5,
				},
				{
					stage_id: 6,
					event_id: 6,
				},
				{
					stage_id: 7,
					event_id: 7,
				},
				{
					stage_id: 8,
					event_id: 8,
				},
				{
					stage_id: 9,
					event_id: 9,
				},
				{
					stage_id: 10,
					event_id: 10,
				},
			], {});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('stage_event', null, {});
	},
};
