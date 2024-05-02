import { Request, Response } from 'express';
import User from '../models/userModel.js';
import asyncHandler from '../middleware/asyncHandler.js';

const loginUser = asyncHandler(async (req: Request, res: Response) => {
  res.send('loginUser');
});

const registerUser = asyncHandler(async (req: Request, res: Response) => {
  res.send('registerUser');
});

const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  res.send('deleteUser');
});

const editUserProfile = asyncHandler(async (req: Request, res: Response) => {
  res.send('editUser');
});

const banUser = asyncHandler(async (req: Request, res: Response) => {
  res.send('banUser');
});

const getUserById = asyncHandler(async (req: Request, res: Response) => {
  res.send('getUserById');
});

const getUserProfile = asyncHandler(async (req: Request, res: Response) => {
  res.send('getUserProfile');
});

const followUser = asyncHandler(async (req: Request, res: Response) => {
  res.send('followUser');
});

const unfollowUser = asyncHandler(async (req: Request, res: Response) => {
  res.send('unfollowUser');
});

export {
  loginUser,
  registerUser,
  deleteUser,
  editUserProfile,
  banUser,
  getUserById,
  getUserProfile,
  followUser,
  unfollowUser,
};
