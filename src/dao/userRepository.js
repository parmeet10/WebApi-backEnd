import Database from '../models/sequelize/index.js';

class UserRepository {
    constructor() {
        this.User = Database.getDB().User;
    }

    async save(
        firstname,
        lastname,
        email,
        password,
        roleId=1
    ) {
        const user = await this.User.create({ firstname, lastname, email, password, roleId});
        return user;
    }
}
export default UserRepository;