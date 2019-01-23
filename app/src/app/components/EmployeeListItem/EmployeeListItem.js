import React from 'react';
import { connect } from 'react-redux';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

import selectTabs from 'selectors/tabs';
import { addTab } from 'actions/tabs';
import './employeeListItem.scss';

class EmployeeListItem extends React.Component {
    render() {
        const { firstName, lastName, title, pic, id, tabs } = this.props;
        return (
            <ListItem 
                button
                onClick={() => tabs.length < 2 && this.props.dispatch(addTab(id))}
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

const mapStateToProps = (state) => {
    return {
        tabs: selectTabs(state.employees, state.tabs)
    };
};

export default connect(mapStateToProps)(EmployeeListItem);
