import UserRepository from "../dao/userRepository.js";
import RoleService from "./roleService.js";
import {
    ROLE
} from '../config/constants.js';
import HandledException from "../exceptions/handledException.js";
import Bcrypt from "./bcrypt.js";
import JWT from '../utils/jwt.js';
import UnauthorizedException from "../exceptions/unauthorizedException.js";
import LoginUserVO from "../vo/loginUserVO.js";
import SignUpUserVO from "../vo/signupUserVO.js";
import User from "../entities/user.js";

class UserService {
    
    /**
     * 
     * @param {*} firstname 
     * @param {*} lastname 
     * @param {*} email 
     * @param {*} password 
     * @returns 
     */
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
            const bcrypt = new Bcrypt();
            const hashPassword = await bcrypt.encrypt(password);
            const user = await userRepository.save(firstname, lastname, email, hashPassword, roles[0].id);
            const _user = new User(user.id, user.uuid, user.firstname, user.lastname, user.email, user.password);
            const plainUser = {
                ..._user
            }
            const token = new JWT().sign(plainUser);
            return new SignUpUserVO(_user, token);
        }
        catch (err) {
            throw err;
        }
    }

    /**
     * 
     * @param {*} email 
     * @returns 
     */
    async getUserByEmail(email) {
        const userRepository = new UserRepository();
        const userArr = await userRepository.findByEmail(email);
        return userArr;
    }

    /**
     * 
     * @param {*} email 
     * @param {*} password 
     * @returns n
     */
    async login(email, password) {
        const userArr = await this.getUserByEmail(email);
        if (userArr.length===0) throw new UnauthorizedException(`User not found`);
        const isValidPassword = new Bcrypt().compare(password, userArr[0].password);
        if (isValidPassword==0) throw new UnauthorizedException('Invalid password');
        const _user = new User(userArr[0].id, userArr[0].uuid, userArr[0].firstname, userArr[0].lastname, userArr[0].email, userArr[0].password);
        const plainUser = {
            ..._user
        }
        const token = new JWT().sign(plainUser);
        return new LoginUserVO(_user, token);
    }
}
export default UserService;