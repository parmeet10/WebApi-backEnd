import mongoose from 'mongoose';
const { Schema } = mongoose;
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    categoryId: {
        type: Number,
        required: true
    },
    authorId: {
        type: Number,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});
const Blog = mongoose.model('Blog', blogSchema);
export default Blog;