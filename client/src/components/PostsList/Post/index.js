import React from 'react';
// import PropTypes from 'prop-types';
import {
    Card,
    Avatar,
    CardHeader,
    IconButton,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';

function Post(props) {
    const { post } = props;

    return (
        <Card>
            <CardHeader
                avatar={<Avatar>A</Avatar>}
                title={post.author}
                subheader={moment(post.updateAt).format('HH:MM MM DD, YYYY')}
                action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                }
            />
            <CardMedia image={post.thumnail} title="Title" />
            <CardContent>
                <Typography variant="h5" color="textPrimary">
                    {post.title}
                </Typography>
                <Typography variant="body2" component="p" color="textPrimary">
                    {post.description}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
                <Typography component="span" color="textSecondary">
                    {post.likes} likes
                </Typography>
            </CardActions>
        </Card>
    );
}

Post.propTypes = {};

export default Post;
