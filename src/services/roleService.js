import RoleRepository from "../dao/roleRepository.js";
class RoleService {
    constructor() {}

    async getRolesByName(roleName) {
        const roleRepository = new RoleRepository();
        const roles = await roleRepository.findRoleByName(roleName);
        return roles;
    }
}
export default RoleService;