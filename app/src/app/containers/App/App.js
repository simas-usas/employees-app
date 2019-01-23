import React from 'react';
import { createMuiTheme, MuiThemeProvider, Hidden, Drawer } from '@material-ui/core';

import HomePage from 'containers/HomePage/HomePage';
import EmployeePage from 'containers/EmployeePage/EmployeePage';

import './app.scss';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00a9df',
            contrastText: '#fff',
        },
        secondary: {
            main: '#202859',
            contrastText: '#fff',
        },
    },
    props: {
        MuiButtonBase: {
            disableRipple: true, 
        },
    },
    shadows: Array(25).fill('none'),
    typography: {
        useNextVariants: true,
        suppressDeprecationWarnings: true,
    },
});

class App extends React.Component {
    state = {
        mobileOpen: false
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="app">
                    <nav className="home">
                        <Hidden smUp>
                            <Drawer
                                variant="temporary"
                                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                open={this.state.mobileOpen}
                                onClose={this.handleDrawerToggle}
                            >
                                <div className="drawer">
                                    <HomePage/>
                                </div>
                            </Drawer>
                        </Hidden>
                        <Hidden xsDown>
                            <Drawer
                                variant="permanent"
                                open
                            >
                                <div className="drawer">
                                    <HomePage/>
                                </div>
                            </Drawer>
                        </Hidden>
                    </nav>

                    <div className="employee">
                        <EmployeePage handleDrawerToggle={this.handleDrawerToggle}/>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;
