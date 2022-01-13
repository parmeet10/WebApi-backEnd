import UserRepository from "../dao/userRepository.js";
import RoleService from "./roleService.js";
import {
    ROLE
} from '../config/constants.js';
import HandledException from "../exceptions/handledException.js";

class UserService {
    
    async signupUser(
        firstname,
        lastname,
        email,
        password
    ) {
        try {
            email = email.toLowerCase();
            const userRepository = new UserRepository();
            const roleService = new RoleService();
            const promises = [
                this.getUserByEmail(email), 
                roleService.getRolesByName(ROLE.CUSTOMER)
            ];
            const [existingUserArr, roles] = await Promise.all(promises);
            if (existingUserArr.length) throw new HandledException(`User already exists with email: ${email}`);
            const user = await userRepository.save(firstname, lastname, email, password, roles[0].id);
            return user;
        }
        catch (err) {
            throw err;
        }
    }

    async getUserByEmail(email) {
        const userRepository = new UserRepository();
        const userArr = await userRepository.findByEmail(email);
        return userArr;
    }
}
export default UserService;