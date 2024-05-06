import express, { Router } from 'express';
import {
  loginUser,
  logoutUser,
  registerUser,
  deleteUser,
  editUserProfile,
  banUser,
  getUserById,
  getUserProfile,
  followUserProfile,
  unfollowUserProfile,
} from '../controllers/userController.js';

const router: Router = express.Router();

router.route('/').post(registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router
  .route('/profile')
  .get(getUserProfile)
  .post(followUserProfile, unfollowUserProfile)
  .put(editUserProfile);

router.route(':/id').get(getUserById).delete(deleteUser).put(banUser);

export default router;
