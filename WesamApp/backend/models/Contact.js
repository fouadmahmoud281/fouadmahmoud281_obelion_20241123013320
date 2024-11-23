const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('Wesam', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql',
  logging: false,
});

class Contact extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isNumeric: true,
            notEmpty: true,
          },
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: true,
            notEmpty: true,
          },
        },
        address: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        city: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        zip: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
      },
      {
        sequelize,
        modelName: 'contacts',
        timestamps: false,
      }
    );
  }
}

Contact.init(sequelize);

module.exports = Contact;