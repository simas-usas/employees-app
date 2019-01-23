import React from 'react';

import Header from 'components/Header/Header';
import SearchBar from 'components/SearchBar/SearchBar';
import EmployeeList from 'components/EmployeeList/EmployeeList';

import './homePage.scss';

const HomePage = (props) => (
    <>
        <Header title="Employee Directory" />
        <SearchBar setSearchText={props.setSearchText}/>
        <EmployeeList 
            employees={props.employees}
            tabs={props.tabs}
            addTab={props.addTab}
        />
    </>
)

export default HomePage;
