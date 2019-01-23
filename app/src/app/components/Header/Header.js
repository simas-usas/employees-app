import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import './header.scss';

const Header = (props) => (
    <div className="header">
        <AppBar position="static">
            <Toolbar>
                {props.drawer &&
                    <IconButton
                        color="inherit"
                        className="menuButton"
                        onClick={props.handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                }
                <div className="textField">{props.title}</div>
            </Toolbar>
        </AppBar>
    </div>
);

export default Header;
