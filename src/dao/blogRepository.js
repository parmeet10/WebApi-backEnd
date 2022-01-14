import Blog from '../models/mongo/blog.js';
class BlogRepository {
    constructor() {};

    /**
     * 
     * @param {*} blog BlogEntity
     */
    async save(
        title,
        description,
        categoryId,
        authorId
    ) {
        const blog = await Blog.create(
            {
                title,
                description,
                categoryId,
                authorId,
            }
        );
        return blog;
    }
}
export default BlogRepository;