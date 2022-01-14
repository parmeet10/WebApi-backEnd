class Blog {
    constructor(id, title, description, categoryId, authorId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.categoryId = categoryId
        this.authorId = authorId;
    }

    getId() {
        return this.Id;
    }

    setId(Id) {
        this.Id = Id;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

    getCategoryId() {
        return this.categoryId;
    }

    setCategoryId(categoryId) {
        this.categoryId = categoryId;
    }

    getAuthorId() {
        return this.authorId;
    }

    setAuthorId(authorId) {
        this.authorId = authorId;
    }
}
export default Blog;