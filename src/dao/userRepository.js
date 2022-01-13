import Database from '../models/sequelize/index.js';

class UserRepository {
    constructor() {
        this.User = Database.getDB().User;
    }

    /**
     * 
     * @param {*} firstname 
     * @param {*} lastname 
     * @param {*} email 
     * @param {*} password 
     * @param {*} roleId 
     * @returns 
     */
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
/**
 * 
 * @param {*} email 
 * @returns 
 */
    async findByEmail(email) {
        const user = await this.User.findAll(
            {
                where: {
                    email: email.toLowerCase()
                }
            }
        )
        return user;
    }
}
export default UserRepository;