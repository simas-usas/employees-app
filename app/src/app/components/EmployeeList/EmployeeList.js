import React from 'react';
import List from '@material-ui/core/List';

import EmployeeListItem from 'components/EmployeeListItem/EmployeeListItem';
import './employeeList.scss';

const EmployeeList = (props) => (
    <List>
        {props.employees.map(employee => (
            <EmployeeListItem 
                key={employee.id} 
                {...employee}
                tabs={props.tabs}
                addTab={props.addTab}
            />    
        ))}
    </List>
);

export default EmployeeList;
