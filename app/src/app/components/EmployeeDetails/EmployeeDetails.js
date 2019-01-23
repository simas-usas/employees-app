import React from 'react';
import { connect } from 'react-redux';

import { Avatar, IconButton, Modal, Tabs, Tab, TextField, Typography, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';

import selectTabs from 'selectors/tabs';
import { removeTab } from 'actions/tabs';
import { editTitle } from 'actions/employees';

import './employeeDetails.scss';

class EmployeeDetails extends React.Component {
    state = {
        value: 0,
        modalOpen: false,
        editedTitle: '',
    };

    handleCloseTab = (id) => {
        this.props.dispatch(removeTab(id));
        this.setState({ value: 0 });
    };

    handleTitleEdit = (id) => {
        this.props.dispatch(editTitle(id, this.state.editedTitle));
        this.setState({ editedTitle: '' });
        this.setState({ modalOpen: false });
    };

    render() {
        const { value } = this.state;
        const { employees } = this.props;

        return (
            <div>
                <Tabs value={value} onChange={(event, value) => this.setState({ value })}>
                    {employees.map(employee => (
                        <Tab key={employee.id} label={`${employee.firstName} ${employee.lastName}`} /> 
                    ))}
                </Tabs>

                {employees.map(employee => (
                    value === employees.indexOf(employee) && 
                        <div key={employee.id} className="details">
                            <div>
                                <IconButton
                                    className="closeButton"
                                    onClick={() => this.handleCloseTab(employee.id)}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </div>
    
                            <div className="employee">
                                <div>
                                    <Avatar
                                        className="avatar"
                                        alt={`${employee.firstName} ${employee.lastName}`} 
                                        src={require('resources/' + employee.pic)} 
                                    />
                                </div>
                                <div className="identity">
                                    <div>                                    
                                        <Typography className="nameText">{`${employee.firstName} ${employee.lastName}`}</Typography>
                                    </div>
                                    <div className="title">
                                        <Typography className="titleText">{employee.title}</Typography>
                                        <IconButton className="editButton" onClick={() => this.setState({ modalOpen: true })}>
                                            <EditIcon />
                                        </IconButton>
                                    </div>
                                </div>

                                <Modal
                                    className="modal"
                                    open={this.state.modalOpen}
                                    onClose={() => this.setState({ modalOpen: false })}
                                >
                                    <div className="modalTitle">
                                        <TextField
                                            className="modalText"
                                            id="title"
                                            label="Title"
                                            defaultValue={employee.title}
                                            margin="normal"
                                            onChange={(event) => this.setState({ editedTitle: event.target.value })}
                                            InputProps={{
                                                //disableUnderline: true
                                            }}
                                        />
                                        <Button variant="contained" color="primary" onClick={() => this.handleTitleEdit(employee.id)}>Update</Button>
                                    </div>
                                </Modal>
                            </div>

                            <div className="contacts">
                                <TextField
                                    className="textField"
                                    id="call-office"
                                    label="Call Office"
                                    value={employee.officePhone}
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                        //disableUnderline: true
                                    }}
                                />
                                <TextField
                                    className="textField"
                                    id="call-mobile"
                                    label="Call Mobile"
                                    value={employee.mobilePhone}
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                        //disableUnderline: true
                                    }}
                                />
                                <TextField
                                    className="textField"
                                    id="sms"
                                    label="SMS"
                                    value={employee.mobilePhone}
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                        //disableUnderline: true
                                    }}
                                />
                                <TextField
                                    className="textField"
                                    id="email"
                                    label="Email"
                                    value={employee.email}
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                        //disableUnderline: true
                                    }}
                                />
                            </div>
                            
                        </div>
                ))}


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employees: selectTabs(state.employees, state.tabs)
    };
};

export default connect(mapStateToProps)(EmployeeDetails);
