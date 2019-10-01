import React, { Component } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationForm.css";

class LocationForm extends Component {
	state = {
		locationAddress: "",
		locationCity: "",
		locationState: "",
		loadingStatus: false
	};

	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	constructNewLocation = evt => {
		evt.preventDefault();
		if (
			this.state.locationAddress === "" ||
			this.state.locationCity === "" ||
			this.state.locationState === ""
		) {
			window.alert("Please complete the adress form!");
		} else {
			this.setState({ loadingStatus: true });
			const location = {
				address: this.state.locationAddress,
				city: this.state.locationCity,
				state: this.state.locationState
			};

			// Create the animal and redirect user to animal list
			LocationManager.post(location).then(() =>
				this.props.history.push("/locations")
			);
		}
	};

	render() {
		return (
			<>
				<form>
					<fieldset>
						<div className="formgrid">
							<input
								type="text"
								required
								onChange={this.handleFieldChange}
								id="locationAddress"
								placeholder="address"
							/>
							<label htmlFor="locationAddress">Address: </label>
							<input
								type="text"
								required
								onChange={this.handleFieldChange}
								id="locationCity"
								placeholder="city"
							/>
							<label htmlFor="locationCity">City: </label>
							<input
								type="text"
								required
								onChange={this.handleFieldChange}
								id="locationState"
								placeholder="state"
							/>
							<label htmlFor="locationCity">State: </label>
						</div>
						<div className="alignRight">
							<button
								type="button"
								disabled={this.state.loadingStatus}
								onClick={this.constructNewLocation}
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

export default LocationForm;
