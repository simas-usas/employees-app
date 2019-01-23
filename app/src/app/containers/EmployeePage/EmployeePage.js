import React from 'react';

import Header from 'components/Header/Header';
import EmployeeDetails from 'components/EmployeeDetails/EmployeeDetails';

import './employeePage.scss';

const EmployeePage = (props) => (
    <React.Fragment>
        <Header drawer={true} title="Employee" handleDrawerToggle={props.handleDrawerToggle}/>
        <EmployeeDetails />
    </React.Fragment>
);


export default EmployeePage;
