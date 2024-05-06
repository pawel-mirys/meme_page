import { NextFunction, Request, Response } from 'express';
import Post from '../models/postModel.js';
import asyncHandler from '../middleware/asyncHandler.js';

const createPost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('createPost');
  }
);

const deletePost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('deletePost');
  }
);

const acceptPost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('acceptPost');
  }
);

const editPost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('createPost');
  }
);

const getPostById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('getPostById');
  }
);

const likePost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('likePost');
  }
);

const dislikePost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('dislikePost');
  }
);

export {
  createPost,
  deletePost,
  acceptPost,
  editPost,
  getPostById,
  likePost,
  dislikePost,
};
