import JWT from '../utils/jwt.js';
import ResponseHandler from '../utils/responseHandler.js';
import {
    UNAUTHORIZED,
    HTTP_STATUS
} from '../config/constants.js';

class AuthMiddleware {
    constructor() {};

    authenticate(req, res, next) {
        try {
            console.log('HELLO')
            const token = req.headers.token;
            if (!token) return new ResponseHandler().sendResponse(res, {message: UNAUTHORIZED}, HTTP_STATUS.BAD_REQUEST);
            const decoded = new JWT().decode(token);
            req.user = decoded;
            next();
        }
        catch (err) {
            console.error(err);
            return new ResponseHandler().sendResponse(res, {}, HTTP_STATUS.INTERNAL_SERVER_ERROR);
        }
    }
}

export default AuthMiddleware;