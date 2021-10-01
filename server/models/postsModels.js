import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postsModels = new Schema(
    {
        title: { type: String, minLength: 1, maxLength: 255, required: true },
        description: {
            type: String,
            minLength: 1,
            default: '',
            maxLength: 600,
            required: true,
        },
        author: {
            type: String,
            minLength: 1,
            default: 'Anonymous',
        },
        attachment: String,
        likeCount: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true },
);

export const PostsModels = mongoose.model('postsModels', postsModels);
