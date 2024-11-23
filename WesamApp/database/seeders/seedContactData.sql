module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('contacts', [
    {
      name: 'John Doe',
      phone: '1234567890',
      email: 'john.doe@example.com',
      address: '123 Main St',
      city: 'Anytown',
      zip: '12345'
    },
    {
      name: 'Jane Smith',
      phone: '0987654321',
      email: 'jane.smith@example.com',
      address: '456 Elm St',
      city: 'Othertown',
      zip: '54321'
    }
  ]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('contacts', null, {})
};