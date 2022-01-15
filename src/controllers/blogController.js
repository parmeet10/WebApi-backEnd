import ResponseHandler from '../utils/responseHandler.js';
import {
    HTTP_STATUS
} from '../config/constants.js';
import {
    blogCreateSchema
} from '../validations/schemas/blog.js';
import AjvCompile from '../validations/ajvCompile.js';
import BlogService from '../services/blogService.js';
import BlogListVO from '../vo/blogListVO.js';

class BlogController {
    constructor() {};

    async save(req, res) {
        try {
            const body = req.body;
            const errors = new AjvCompile().validate(blogCreateSchema, body);
            if (errors) return new ResponseHandler().sendResponse(res, {}, HTTP_STATUS.BAD_REQUEST, errors);
            const {
                title,
                description,
                categoryId,
                authorId,
                thumbnail
            } = body;
            const blogService = new BlogService();
            await blogService.save(title, description, categoryId, authorId,thumbnail);
            return new ResponseHandler().sendResponse(res, {}, HTTP_STATUS.CREATED, 'Blog created successfully.');
        }
        catch (e) {
            console.error(e);
            return new ResponseHandler().sendResponse(res, {}, HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Something went wrong.');
        }
    }
    async list(req, res){
        try {
            const blogService = new BlogService();
            const blogListVO = await blogService.list();
            return new ResponseHandler().sendResponse(res, {data: blogListVO}, HTTP_STATUS.OK, 'Blog list fetched successfully.');

        }
        catch (e) {}
    }
}
export default BlogController;