import Blog from '../entities/blog.js';
import BlogRepository from '../dao/blogRepository.js';
class BlogService {
    constructor() {};

    async save(
        title,
        description,
        categoryId,
        authorId
    ) {
        try {
            const blogRepository = new BlogRepository();
            const blog = await blogRepository.save(title, description, categoryId, authorId);
            const _blog = new Blog(blog._id, title, description, categoryId, authorId);
            return _blog;
        }
        catch (err) {
            throw err;
        }
    }
}
export default BlogService;