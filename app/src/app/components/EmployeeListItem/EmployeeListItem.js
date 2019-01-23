import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

import './employeeListItem.scss';

class EmployeeListItem extends React.Component {
    render() {
        const { firstName, lastName, title, pic, id, tabs } = this.props;
        return (
            <ListItem 
                button
                onClick={() => tabs.length < 2 && this.props.addTab(id)}
            >
                <ListItemAvatar>
                    <Avatar 
                        alt={`${firstName} ${lastName}`} 
                        src={require('resources/' + pic)} 
                    />
                </ListItemAvatar> 
                <ListItemText 
                    inset
                    primary={`${firstName} ${lastName}`}
                    secondary={title}
                />
            </ListItem>
        )
    }
} 

export default EmployeeListItem;
