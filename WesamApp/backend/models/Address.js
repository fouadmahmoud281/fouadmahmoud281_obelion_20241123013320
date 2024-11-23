const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('Wesam', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql'
});

class Address extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      zip: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isNumeric: true
        }
      }
    }, {
      sequelize,
      modelName: 'Address',
      timestamps: false,
      tableName: 'addresses'
    });
  }
}

Address.init(sequelize);

module.exports = Address;