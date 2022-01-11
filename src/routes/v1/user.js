import express from 'express';
import UserController from '../../controllers/user.js';
import AuthMiddlware from '../../middlewares/authMiddleware.js';
const userRoutes = express.Router();

userRoutes.post('/users/signup', new UserController().signup);

export default userRoutes;