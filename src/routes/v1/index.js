import express from 'express';
import userRoutes from './user.js';
import blogRoutes from './blog.js';
const v1Routes = express.Router();
v1Routes.use('/v1', userRoutes);
v1Routes.use('/v1', blogRoutes);
export default v1Routes;
