import React from 'react';
// import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import useStyle from './styles';

function Header(props) {
    const classes = useStyle();
    return (
        <Typography variant="h4" align="center" className={classes.container}>
            Blog
        </Typography>
    );
}

Header.propTypes = {};

export default Header;
