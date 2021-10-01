import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from './pages/HomePage';
import * as actions from './redux/actions';
import { modalState$, postsState$ } from './redux/selector';

function App() {
    const dispatch = useDispatch();
    const posts = useSelector(postsState$);
    const { isShow } = useSelector(modalState$);

    console.info(posts);

    const handleCreatePostModal = useCallback(() => {
        dispatch(actions.showModal());
    }, [dispatch]);

    const onClose = useCallback(() => {
        dispatch(actions.hideModal());
    }, [dispatch]);

    const onSubmit = useCallback(
        (data) => {
            dispatch(actions.createPost.createPostRequest(data));
        },
        [dispatch],
    );

    useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest());
    }, [dispatch]);

    return (
        <HomePage
            posts={posts}
            isShow={isShow}
            onClose={onClose}
            onSubmit={onSubmit}
            handleCreatePostModal={handleCreatePostModal}
        />
    );
}

export default App;
