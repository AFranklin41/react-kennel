import React, { Component } from "react";

class EmployeeCard extends Component {
	render() {
		return (
			<div className="card">
				<div className="card-content">
					<picture>
						{/* <img src={require("./dog.svg")} alt="My Dog" /> */}
					</picture>
					<h3>
						Name: <span className="card-employeeName">{this.props.employeeProp.name}</span>
					</h3>
					<p>{this.props.employeeProp.position}</p>
				</div>
			</div>
		);
	}
}

export default EmployeeCard;