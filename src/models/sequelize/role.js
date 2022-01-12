import { Model } from 'sequelize';

const roleFunc = (sequelize, Sequelize) => {
    class Role extends Model {
        static associate(models) {
            this.hasMany(models.User);
        }

        toJSON() {
            return { ...this.get(), id: undefined }; // hides id from response
        }
    }

    Role.init({
        id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.DataTypes.INTEGER,
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
        }
    }, {
        sequelize,
        tableName: 'roles',
        modelName: 'Role'
    });
    return Role;
}
export default roleFunc;