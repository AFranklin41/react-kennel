import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeForm.css'

class EmployeeForm extends Component {
    state = {
        employeeName: "",
        employeePosition: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewEmployee = evt => {
        evt.preventDefault();
        if (this.state.employeeName === "" || this.state.employeePosition === "") {
            window.alert("Please input a name");
        } else {
            this.setState({ loadingStatus: true });
            const employee = {
                name: this.state.employeeName,
                position: this.state.employeePosition,
            };

            // Create the animal and redirect user to animal list
            EmployeeManager.post(employee)
            .then(() => this.props.history.push("/employees"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="employeeName"
                        placeholder="name"
                        />
                        <label htmlFor="employeeName">Employee Name: </label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewEmployee}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default EmployeeForm