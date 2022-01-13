import Database from '../models/sequelize/index.js';

class RoleRepository {
    constructor() {
        this.Role = Database.getDB().Role;
    }

    async findRoleByName(roleName) {
        const roles = await this.Role.findAll({
            where: {
                name: roleName    
            },
            
        });
        return roles;
    }
}
export default RoleRepository;