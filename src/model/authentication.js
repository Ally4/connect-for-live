import Sequelize from "sequelize";
import { sequelize } from '../db/dbConnect.js';

const Event = sequelize.define('user', {
  user_id: {
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
  email: {
    type: Sequelize.BIGINT,
    allowNull: true
  },
  phonenumber: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  role: {
    type: "ENUM('admin','user','teacher', 'student', 'headmaster')",
    allowNull: false,
    defaultValue: "user"
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  confirmPassword: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
}, {
  sequelize,
  tableName: 'user',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "user_id" },
      ]
    },
  ]
});

export default Event;
