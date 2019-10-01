import React, { Component } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationForm.css";

class LocationEditForm extends Component {
	//set the initial state
	state = {
		address: "",
		city: "",
		state: "",
		loadingStatus: true
	};

	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	updateExistingLocation = evt => {
		evt.preventDefault();
		this.setState({ loadingStatus: true });
		const editedLocation = {
			id: this.props.match.params.locationId,
			address: this.state.address,
			city: this.state.city,
			state: this.state.state
		};

		LocationManager.update(editedLocation).then(() =>
			this.props.history.push("/locations")
		);
	};

	componentDidMount() {
		LocationManager.get(this.props.match.params.locationId).then(location => {
			this.setState({
				address: location.address,
				city: location.city,
				state: location.state,
				loadingStatus: false
			});
		});
	}

	render() {
		return (
			<>
				<form>
					<fieldset>
						<div className="formgrid">
							<input
								type="text"
								required
								className="form-control"
								onChange={this.handleFieldChange}
								id="address"
								value={this.state.address}
							/>
							<label htmlFor="address">Updated Address: </label>

							<input
								type="text"
								required
								className="form-control"
								onChange={this.handleFieldChange}
								id="city"
								value={this.state.city}
							/>
							<label htmlFor="city">Updated City: </label>
                            <input
								type="text"
								required
								className="form-control"
								onChange={this.handleFieldChange}
								id="state"
								value={this.state.state}
							/>
							<label htmlFor="state">Updated State: </label>
						</div>
						<div className="alignRight">
							<button
								type="button"
								disabled={this.state.loadingStatus}
								onClick={this.updateExistingLocation}
								className="btn btn-primary"
							>
								Submit
							</button>
						</div>
					</fieldset>
				</form>
			</>
		);
	}
}

export default LocationEditForm;
