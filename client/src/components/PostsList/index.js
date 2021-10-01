import React from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Post from './Post';

function PostsList(props) {
    const { posts } = props;

    return (
        <Grid container spacing={2} alignItem="stretch">
            {posts.map((post) => (
                <Grid xs={12} sm={4} key={post._id}>
                    <Post post={post} />
                </Grid>
            ))}
        </Grid>
    );
}

PostsList.propTypes = {};

export default PostsList;
