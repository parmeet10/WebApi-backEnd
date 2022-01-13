import UserRepository from "../dao/userRepository.js";
import RoleService from "./roleService.js";
import {
    ROLE
} from '../config/constants.js';

class UserService {
    
    async signupUser(
        firstname,
        lastname,
        email,
        password
    ) {
        try {
            const userRepository = new UserRepository();
            const roleService = new RoleService();
            const roles = await roleService.getRolesByName(ROLE.CUSTOMER);
            const user = await userRepository.save(firstname, lastname, email, password, roles[0].id);
            return user;
        }
        catch (err) {
            throw err;
        }
    }
}
export default UserService;