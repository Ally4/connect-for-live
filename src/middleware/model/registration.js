import Sequelize from "sequelize";
import { sequelize } from '../db/dbConnect.js';

const Event = sequelize.define('registration', {
  registered_id: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  classe: {
    type: Sequelize.STRING(255),
    allowNull: false
  },  
  adult_contact: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  dateOfBirth: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
}, {
  sequelize,
  tableName: 'registration',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "registered_id" },
      ]
    },
  ]
});

export default Event;
