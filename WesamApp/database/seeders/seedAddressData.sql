module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('addresses', [
    { address: '123 Main St', city: 'Springfield', zip: '12345' },
    { address: '456 Elm St', city: 'Shelbyville', zip: '67890' },
    { address: '789 Oak St', city: 'Capital City', zip: '11223' }
  ]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('addresses', null, {})
};