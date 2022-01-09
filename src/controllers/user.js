import { HTTP_STATUS } from '../config/constants.js';
import ResponseHandler from '../utils/responseHandler.js';

class UserController {
    constructor() {};

    signup(req, res, next) {
        try {
            
        }
        catch (err) {
            console.error(err);
            new ResponseHandler().sendResponse(res, {}, HTTP_STATUS.INTERNAL_SERVER_ERROR);
        }
    }
}

export default UserController;