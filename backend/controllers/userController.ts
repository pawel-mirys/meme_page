import { Request, Response } from 'express';
import User from '../models/userModel.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { NextFunction } from 'connect';

const loginUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('loginUser');
  }
);

const logoutUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('logoutUser');
  }
);

const registerUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('registerUser');
  }
);

const deleteUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('deleteUser');
  }
);

const editUserProfile = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('editUser');
  }
);

const banUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('banUser');
  }
);

const getUserById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('getUserById');
  }
);

const getUserProfile = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('getUserProfile');
  }
);

const followUserProfile = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('followUser');
  }
);

const unfollowUserProfile = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('unfollowUser');
  }
);

export {
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
};
