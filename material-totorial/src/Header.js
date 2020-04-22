import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
}))


const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant= "h4" className={classes.typographyStyles}>
                    This is the header
                </Typography>
                <AcUnitIcon />
            </Toolbar>
        </AppBar>        
    );
};

export default Header;