import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Button, Modal, TextareaAutosize, TextField } from '@material-ui/core';
import useStyles from './styles.js';
import FileBase64 from 'react-file-base64';

function CreatePostModal(props) {
    const [data, setData] = useState({
        title: '',
        description: '',
        attachment: '',
    });
    const { isShow, onClose, onSubmit } = props;
    const classes = useStyles();

    const body = (
        <div className={classes.paper} id="simple-modal-title">
            <h2>Create New Post</h2>
            <form noValidate autoComplete="off" className={classes.form}>
                <TextField
                    className={classes.title}
                    required
                    label="Title"
                    value={data.title}
                    onChange={(e) =>
                        setData({ ...data, title: e.target.value })
                    }
                />
                <TextareaAutosize
                    className={classes.textarea}
                    rowsMin={10}
                    rowsMax={15}
                    placeholder="content ..."
                    value={data.content}
                    onChange={(e) =>
                        setData({ ...data, description: e.target.value })
                    }
                />
                <FileBase64
                    accept="image/*"
                    multiple={false}
                    type="file"
                    value={data.thumnail}
                    onDone={({ base64 }) =>
                        setData({ ...data, attachment: base64 })
                    }
                />
                <div className={classes.footer}>
                    <Button
                        variant="contained"
                        color="primary"
                        component="span"
                        fullWidth
                        onClick={() => onSubmit(data)}
                    >
                        Create
                    </Button>
                </div>
            </form>
        </div>
    );

    return (
        <div>
            <Modal open={isShow} onClose={onClose}>
                {body}
            </Modal>
        </div>
    );
}

CreatePostModal.propTypes = {};

export default CreatePostModal;
