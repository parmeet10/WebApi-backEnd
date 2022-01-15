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
        authorId,
        thumbnail
    ) {
        const blog = await Blog.create(
            {
                title,
                description,
                categoryId,
                authorId,
                thumbnail,
            }
        );
        return blog;
    }
}
export default BlogRepository;