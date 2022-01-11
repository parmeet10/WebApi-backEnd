import { Model } from 'sequelize';
const userFunc = (sequelize, Sequelize) => {
    class User extends Model {
        static associate(models) {}

        toJSON() {
            return {...this.get(), id: undefined}; // hides id from response
        }
    }
    User.init({
        uuid: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            allowNull: false
        },
        name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
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
    },{
        sequelize,
        tableName: 'users',
        modelName: 'User'
    })
    return User;
}
export default userFunc;