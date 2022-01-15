import express from 'express';
import BlogController from '../../controllers/blogController.js';
const blogRoutes = express.Router();
blogRoutes.post('/blogs', new BlogController().save);
blogRoutes.get('/blogs', new BlogController().list)
export default blogRoutes;