import React from 'react';

import Header from 'components/Header/Header';
import SearchBar from 'components/SearchBar/SearchBar';
import EmployeeList from 'components/EmployeeList/EmployeeList';

import './homePage.scss';

class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header title="Employee Directory"/>
                <SearchBar />
                <EmployeeList />
            </React.Fragment>
        )
    }
}

export default HomePage;
