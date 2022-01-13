'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('users', {
       id: {
         type: Sequelize.DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true
       },
        uuid: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            allowNull: false
        },
        firstname: {
            type: Sequelize.DataTypes.STRING(50),
            allowNull: false
        },
        lastname: {
          type: Sequelize.DataTypes.STRING(50),
          allowNull: false
        },
        email: {
            type: Sequelize.DataTypes.STRING(100),
            allowNull: false
        },
        roleId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'roles',
              key: 'id'
            }
        },
        password: {
          type: Sequelize.DataTypes.STRING(100),
          allowNull: false
        },
        status: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: 1
        },
        createdAt: {
          type: 'TIMESTAMP',
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          type: 'TIMESTAMP',
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
     });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  }
};