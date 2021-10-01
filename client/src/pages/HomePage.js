import React from 'react';
// import PropTypes from 'prop-types';
import { Container, Fab } from '@material-ui/core';
import Header from '../components/Header';
import PostsList from '../components/PostsList';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';
import CreatePostModal from '../components/CreatePostModal';

function HomePage(props) {
    const { posts, isShow, handleCreatePostModal, onClose, onSubmit } = props;
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <Header />
            <PostsList posts={posts} />
            <CreatePostModal
                isShow={isShow}
                onClose={onClose}
                onSubmit={onSubmit}
            />
            <Fab
                color="primary"
                className={classes.fab}
                onClick={handleCreatePostModal}
            >
                <AddIcon />
            </Fab>
        </Container>
    );
}

HomePage.propTypes = {};

export default HomePage;
