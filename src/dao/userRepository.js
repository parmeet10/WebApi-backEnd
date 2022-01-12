import Database from '../models/sequelize/index.js';
class UserRepository {
    constructor() {
        this.User = Database.getDB().User;
    }

    async save(
        firstname,
        lastname,
        email,
        password
    ) {
        console.log(firstname);
        console.log(email);
        console.log(lastname);
        console.log(password);
        const User = new this.User();
        const user = await User.save({firstname, lastname, email, password});
        return user;
    }
}
export default UserRepository;