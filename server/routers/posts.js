import express from 'express';
import { createPosts, getPosts, updatePosts } from '../controller/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPosts);
router.post('/', updatePosts);

export default router;
