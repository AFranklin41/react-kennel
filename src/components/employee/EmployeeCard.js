import React, { Component } from "react";
// import { Link } from "react-router-dom";

class EmployeeCard extends Component {
	render() {
		return (
			<div className="card">
				<div className="card-content">
					<picture>
						{/* <img src={require("./dog.svg")} alt="My Dog" /> */}
					</picture>
					<h3>
						Name:{" "}
						<span className="card-employeeName">
							{this.props.employeeProp.name}
						</span>
					</h3>
					<p>{this.props.employeeProp.position}</p>
					<button
						onClick={() =>
							this.props.deleteEmployeeProp(this.props.employeeProp.id)
						}
					>
						Fire
					</button>
					<button
						type="button"
						onClick={() => {
							this.props.history.push(
								`/employees/${this.props.employeeProp.id}/edit`
							);
						}}
					>
						Edit
					</button>
				</div>
			</div>
		);
	}
}

export default EmployeeCard;
