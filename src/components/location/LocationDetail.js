import React, { Component } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css";

class LocationDetail extends Component {
	state = {
		address: "",
		city: "",
		state: "",
		employees: [],
		loadingStatus: true
	};

	handleDelete = () => {
		//invoke the delete function in AnimalManger and re-direct to the animal list.
		this.setState({ loadingStatus: true });
		LocationManager.delete(this.props.locationId).then(() =>
			this.props.history.push("/locations")
		);
	};

	componentDidMount() {
		console.log("LocationDetail: ComponentDidMount");
		//get(id) from AnimalManager and hang on to that data; put it into state
		LocationManager.getLocationWithEmployees(this.props.locationId).then(
			location => {
				this.setState({
					address: location.address,
					city: location.city,
					state: location.state,
					loadingStatus: false,
					employees: location.employees
				});
			}
		);
	}

	render() {
		return (
			<div className="card">
				<div className="card-content">
					<h3>
						Name:{" "}
						<span style={{ color: "darkslategrey" }}>{this.state.name}</span>
					</h3>
					<p>Address: {this.state.address}</p>
					<p>City: {this.state.city}</p>
					<p>State: {this.state.state}</p>
					<br />
					<div>
						Employees:
						{this.state.employees.map(singleEmployee => {
							return <p key={singleEmployee.id}>{singleEmployee.name}</p>;
						})}
					</div>
					<button
						type="button"
						disabled={this.state.loadingStatus}
						onClick={this.handleDelete}
					>
						Remove Location
					</button>
				</div>
			</div>
		);
	}
}

export default LocationDetail;
