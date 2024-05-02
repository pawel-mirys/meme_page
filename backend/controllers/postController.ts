import { Request, Response } from 'express';
import Post from '../models/postModel.js';
import asyncHandler from '../middleware/asyncHandler.js';

const createPost = asyncHandler(async (req: Request, res: Response) => {
  res.send('createPost');
});

const deletePost = asyncHandler(async (req: Request, res: Response) => {
  res.send('deletePost');
});

const acceptPost = asyncHandler(async (req: Request, res: Response) => {
  res.send('acceptPost');
});

const editPost = asyncHandler(async (req: Request, res: Response) => {
  res.send('createPost');
});

const getPostById = asyncHandler(async (req: Request, res: Response) => {
  res.send('getPostById');
});

const likePost = asyncHandler(async (req: Request, res: Response) => {
  res.send('likePost');
});

const dislikePost = asyncHandler(async (req: Request, res: Response) => {
  res.send('dislikePost');
});

export {
  createPost,
  deletePost,
  acceptPost,
  editPost,
  getPostById,
  likePost,
  dislikePost,
};
