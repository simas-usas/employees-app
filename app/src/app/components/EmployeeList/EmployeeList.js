import React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';

import selectEmployees from 'selectors/employees';

import EmployeeListItem from 'components/EmployeeListItem/EmployeeListItem';
import './employeeList.scss';

const EmployeeList = (props) => (
    <List>
        {props.employees.map(employee => (
            <EmployeeListItem 
                key={employee.id} 
                {...employee}
            />    
        ))}
    </List>
);

const mapStateToProps = (state) => {
    return {
        employees: selectEmployees(state.employees, state.filters)
    };
};

export default connect(mapStateToProps)(EmployeeList);
