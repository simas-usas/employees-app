import React from 'react';

import Header from 'components/Header/Header';
import EmployeeDetails from 'components/EmployeeDetails/EmployeeDetails';

import './employeePage.scss';

const EmployeePage = (props) => (
    <>
        <Header 
            drawer={true}
            title="Employee"
            handleDrawerToggle={props.handleDrawerToggle}
        />
        <EmployeeDetails 
            employees={props.tabs}
            editTitle={props.editTitle}
            removeTab={props.removeTab}
        />
    </>
);

export default EmployeePage;
