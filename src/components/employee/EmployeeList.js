import React, { Component } from "react";
//import the components we will need
import EmployeeCard from "./EmployeeCard.js";
import EmployeeManager from "../../modules/EmployeeManager.js";

class EmployeeList extends Component {
	//define what this component needs to render
	state = {
		employees: []
	};

	deleteEmployee = id => {
		EmployeeManager.delete(id).then(() => {
			EmployeeManager.getAll().then(parsedEmployees => {
				this.setState({
					employees: parsedEmployees
				});
			});
		});
	};

	componentDidMount() {
		console.log("EMPLOYEE LIST: ComponentDidMount");
		//getAll from AnimalManager and hang on to that data; put it in state
		EmployeeManager.getAll().then(employees => {
			this.setState({
				employees: employees
			});
		});
	}

	render() {
		console.log("EMPLOYEE LIST: Render");

		return (
			<div className="container-cards">
				<section className="section-content">
					<button
						type="button"
						className="btn"
						onClick={() => {
							this.props.history.push("/employees/new");
						}}
					>
						Hire Employee
					</button>
				</section>
				{this.state.employees.map(singleEmployee => (
					<EmployeeCard
						deleteEmployeeProp={this.deleteEmployee}
						key={singleEmployee.id}
						employeeProp={singleEmployee}
						{...this.props}
					/>
				))}
			</div>
		);
	}
}

export default EmployeeList;
