import express from 'express';
import routes from './routes/index.js';
import ResponseHandler from './utils/responseHandler.js';
import { HTTP_STATUS } from './config/constants.js';

class Server {
    constructor(app) {
        this.app = app;
        this.port = process.env.PORT || 3000;
        this.init();
    }

    init() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use('/', routes);

        // handling errors
        this.app.use(this.routeNotFound);
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server started listening on port ${this.port}`);
        })
    }

    errorHandler(req, res) {
        return new ResponseHandler().sendResponse(res, {message: 'Something went wrong'}, HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }

    routeNotFound(req, res) {
        return new ResponseHandler().sendResponse(res, {message: 'Resource not found'}, HTTP_STATUS.RESOURCE_NOT_FOUND);
    }
}
export default Server;