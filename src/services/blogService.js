import Blog from '../entities/blog.js';
import BlogRepository from '../dao/blogRepository.js';
import HandledException from "../exceptions/handledException.js";
import BlogListVO from '../vo/blogListVO.js';
class BlogService {
    constructor() { };

    async save(
        title,
        description,
        categoryId,
        authorId,
        thumbnail
    ) {
        try {
            const blogRepository = new BlogRepository();
            const blog = await blogRepository.save(title, description, categoryId, authorId, thumbnail);
            const _blog = new Blog(blog._id, title, description, categoryId, authorId, thumbnail);
            return _blog;
        }
        catch (err) {
            throw err;
        }
    }
    async list() {
        try {
            const blogRepository = new BlogRepository();
            const list = await blogRepository.list();
            return new BlogListVO(list);
        }
        catch (err) {
            throw err;
        }

    }
}
export default BlogService;