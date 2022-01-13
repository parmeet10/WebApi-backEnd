import { HTTP_STATUS } from '../config/constants.js';
import ResponseHandler from '../utils/responseHandler.js';
import { 
    userSignupSchema,
    userLoginSchema
} from '../validations/schemas/user.js';
import AjvCompile from '../validations/ajvCompile.js';
import UserService from '../services/userService.js';
import SignUpUserVO from '../vo/signupUserVO.js';
import HandledException from '../exceptions/handledException.js';
import UnauthorizedException from '../exceptions/unauthorizedException.js';

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
            } = body;
            const userService = new UserService();
            const user = await userService.signupUser(firstname, lastname, email, password);
            if (user) return new ResponseHandler().sendResponse(res, {user: new SignUpUserVO(user)}, HTTP_STATUS.CREATED, 'User created successfully');
        }
        catch (e) {
            console.error(e);
            if (e instanceof HandledException) {
                return new ResponseHandler().sendResponse(res, {}, HTTP_STATUS.BAD_REQUEST, e.getMessage());
            }
            return new ResponseHandler().sendResponse(res, {}, HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Something went wrong');
        }
    }

    async login(req, res) {
        try {
            const body = req.body;
            const errors = new AjvCompile().validate(userLoginSchema, body);
            if (errors) return new ResponseHandler().sendResponse(res, {}, HTTP_STATUS.BAD_REQUEST, errors);
            const {
                email,
                password
            } = body;
            const userService = new UserService();
            await userService.login(email, password);
        }
        catch (e) {
            console.error(e);
            if (e instanceof UnauthorizedException) return new ResponseHandler().sendResponse(res, {}, HTTP_STATUS.UNAUTHORIZED, e.getMessage());
            return new ResponseHandler().sendResponse(res, {}, HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Something went wrong');
        }
    }
}

export default UserController;