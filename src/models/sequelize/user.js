import { Model } from 'sequelize';
const userFunc = (sequelize, Sequelize) => {
    class User extends Model {
        static associate(models) {
            this.belongsTo(models.Role)
        }

        toJSON() {
            return { ...this.get(), id: undefined }; // hides id from response
        }
    }
    User.init({
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
            allowNull: false
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
        }
    }, {
        sequelize,
        tableName: 'users',
        modelName: 'User'
    })
    return User;
}
export default userFunc;