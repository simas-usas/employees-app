import React from 'react';

import { Avatar, IconButton, Modal, Tabs, Tab, TextField, Typography, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';

import './employeeDetails.scss';

class EmployeeDetails extends React.Component {
    state = {
        value: 0,
        modalOpen: false,
        editedTitle: '',
    };

    handleCloseTab = (id) => {
        this.props.removeTab(id);
        this.setState({ value: 0 });
    };

    handleTitleEdit = (id) => {
        this.props.editTitle(id, this.state.editedTitle);
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
                                    className="close-button"
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
                                        <Typography className="name-text">{`${employee.firstName} ${employee.lastName}`}</Typography>
                                    </div>
                                    <div className="title">
                                        <Typography className="title-text">{employee.title}</Typography>
                                        <IconButton className="edit-button" onClick={() => this.setState({ modalOpen: true, editedTitle: employee.title })}>
                                            <EditIcon />
                                        </IconButton>
                                    </div>
                                </div>

                                <Modal
                                    className="modal"
                                    open={this.state.modalOpen}
                                    onClose={() => this.setState({ modalOpen: false })}
                                >
                                    <div className="modal-title">
                                        <TextField
                                            className="modal-text"
                                            id="title"
                                            label="Title"
                                            defaultValue={employee.title}
                                            margin="normal"
                                            onChange={(event) => this.setState({ editedTitle: event.target.value })}
                                        />
                                        <Button variant="contained" color="primary" onClick={() => this.handleTitleEdit(employee.id)}>Update</Button>
                                    </div>
                                </Modal>
                            </div>

                            <div className="contacts">
                                <TextField
                                    className="text-field"
                                    id="call-office"
                                    label="Call Office"
                                    value={employee.officePhone}
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                <TextField
                                    className="text-field"
                                    id="call-mobile"
                                    label="Call Mobile"
                                    value={employee.mobilePhone}
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                <TextField
                                    className="text-field"
                                    id="sms"
                                    label="SMS"
                                    value={employee.mobilePhone}
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                <TextField
                                    className="text-field"
                                    id="email"
                                    label="Email"
                                    value={employee.email}
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </div>
                            
                        </div>
                ))}


            </div>
        );
    }
}

export default EmployeeDetails;
