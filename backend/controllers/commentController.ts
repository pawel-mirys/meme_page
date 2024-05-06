import { NextFunction, Request, Response } from 'express';
import Comment from '../models/commentModel.js';
import asyncHandler from '../middleware/asyncHandler.js';

const addComment = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('addComment');
  }
);

const deleteComment = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('addComment');
  }
);

const editComment = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('addComment');
  }
);

const likeComment = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('likeComment');
  }
);

const dislikeCommnet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('dislikeCommnet');
  }
);

export { addComment, deleteComment, editComment, likeComment, dislikeCommnet };
