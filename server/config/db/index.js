import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blogs' );
        console.log('connect mongodb success !');
    } catch (error) {
        console.log('connect mongodb error !');
    }
}
