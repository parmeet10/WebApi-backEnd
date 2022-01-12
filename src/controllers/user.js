import { HTTP_STATUS } from '../config/constants.js';
import ResponseHandler from '../utils/responseHandler.js';
import { userSignupSchema } from '../validations/schemas/user.js';
import AjvCompile from '../validations/ajvCompile.js';
import UserService from '../services/user.js';

class UserController {
    constructor() {};

    async signup(req, res) {
        try {
            const body = req.body;
            const errors = new AjvCompile().validate(userSignupSchema, body);
            if (errors) return new ResponseHandler().sendResponse(res, {}, HTTP_STATUS.BAD_REQUEST, errors);
            const {
                firstname,
                lastname,
                email,
                password
            } = req.body;
            const userService = new UserService();
            const user = await userService.signupUser(firstname, lastname, email, password);
        }
        catch (err) {
            console.error(err);
            new ResponseHandler().sendResponse(res, {}, HTTP_STATUS.INTERNAL_SERVER_ERROR);
        }
    }
}

export default UserController;