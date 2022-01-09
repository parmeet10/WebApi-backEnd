class ResponseHandler {
    constructor() {};
    
    sendResponse(res, data, statusCode = 500) {
        return res.status(statusCode).send(data);
    }
}
export default ResponseHandler;