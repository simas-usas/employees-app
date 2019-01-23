import React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { setSearchText } from 'actions/filters';
import { addTab, removeTab } from 'actions/tabs';
import { editTitle } from 'actions/employees';

import selectEmployees from 'selectors/employees';
import selectTabs from 'selectors/tabs';

import { createMuiTheme, MuiThemeProvider, Hidden, Drawer } from '@material-ui/core';

import HomePage from 'components/HomePage/HomePage';
import EmployeePage from 'components/EmployeePage/EmployeePage';

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
        temporaryDrawerOpen: false
    };

    handleDrawerToggle = () => {
        this.setState(prevState => ({ temporaryDrawerOpen: !prevState.temporaryDrawerOpen }));
    };

    render() {
        const { employees, tabs, setSearchText, addTab, removeTab, editTitle } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <div className="app">
                    <nav className="home">
                        <Hidden smUp>
                            <Drawer
                                variant="temporary"
                                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                open={this.state.temporaryDrawerOpen}
                                onClose={this.handleDrawerToggle}
                            >
                                <div className="drawer">
                                    <HomePage 
                                        employees
                                        tabs
                                        setSearchText
                                        addTab
                                    />
                                </div>
                            </Drawer>
                        </Hidden>
                        <Hidden xsDown>
                            <Drawer
                                variant="permanent"
                                open
                            >
                                <div className="drawer">
                                    <HomePage 
                                        employees
                                        tabs
                                        setSearchText
                                        addTab
                                    />
                                </div>
                            </Drawer>
                        </Hidden>
                    </nav>

                    <div className="employee">
                        <EmployeePage 
                            tabs
                            editTitle
                            removeTab
                            handleDrawerToggle={this.handleDrawerToggle}
                        />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = (state) => ({
        employees: selectEmployees(state.employees, state.filters),
        tabs: selectTabs(state.employees, state.tabs)
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setSearchText, addTab, removeTab, editTitle
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
