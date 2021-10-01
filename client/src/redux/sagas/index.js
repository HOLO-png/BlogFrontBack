import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchPostsSaga(action) {
    try {
        const posts = yield call(api.fetchPosts);
        yield put(actions.getPosts.getPostsSuccess(posts.data));
        console.info(posts);
    } catch (error) {
        console.info(error);
        yield put(actions.getPosts.getPostsFailure(error));
    }
}

function* createPostSaga(action) {
    try {
        console.info(action.payload);
        const newPost = yield call(api.createPost, action.payload);
        console.info(newPost);
        // yield put(actions.createPost.createPostSuccess(newPost.data));
    } catch (error) {
        console.info(error);
        yield put(actions.createPost.createPostFailure(error));
    }
}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
}

export default mySaga;
