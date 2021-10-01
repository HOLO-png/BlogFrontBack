import { PostsModels } from '../models/postsModels.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await PostsModels.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const createPosts = async (req, res) => {
    try {
        const data = req.body;
        const post = new PostsModels({ data });
        await post.save();
        console.info('posts new: ', post);
        res.status(200).json(post);
    } catch (error) {
        console.log('ok');
        res.status(500).json({ error: 'loi roi' });
    }
};

export const updatePosts = async (req, res) => {
    try {
        const update = req.body;
        const post = await PostsModels.findOneAndUpdate(
            { _id: update._id },
            update,
            { new: true },
        );
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
