import mongoose from 'mongoose';
import commentSchema from './commentModel.js';

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
  likes: {
    type: Number,
    required: true,
    default: 0,
  },
  postedAt: {
    type: String,
  },
  isAccepted: {
    type: Boolean,
    default: false,
  },
  comments: [commentSchema],
});

const Post = mongoose.model('Post', postSchema);

export default Post;
