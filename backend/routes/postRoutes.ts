import express, { Router } from 'express';
import {
  createPost,
  deletePost,
  acceptPost,
  editPost,
  getPostById,
  likePost,
  dislikePost,
} from '../controllers/postController.js';

const router: Router = express.Router();

router.route('/').post(createPost);

router
  .route('/:id')
  .delete(deletePost)
  .put(editPost, likePost, dislikePost, getPostById)
  .put(acceptPost);

export default router;
