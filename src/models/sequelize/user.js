import { Model } from 'sequelize';
const userFunc = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {}

        toJSON() {
            return {...this.get(), id: undefined}; // hides id from response
        }
    }
    User.init({
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
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