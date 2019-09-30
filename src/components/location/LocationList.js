import React, { Component } from "react";
//import the components we will need
import LocationCard from "./LocationCard.js";
import LocationManager from "../../modules/LocationManager.js";

class LocationList extends Component {
	//define what this component needs to render
	state = {
		locations: []
	};

	deleteLocation = id => {
		LocationManager.delete(id).then(() => {
			LocationManager.getAll().then(parsedLocations => {
				this.setState({
					locations: parsedLocations
				});
			});
		});
	};
	componentDidMount() {
		console.log("LOCATION LIST: ComponentDidMount");
		//getAll from AnimalManager and hang on to that data; put it in state
		LocationManager.getAll().then(locations => {
			this.setState({
				locations: locations
			});
		});
	}

	render() {
		console.log("LOCATIONS LIST: Render");

		return (
			<div className="container-cards">
				{this.state.locations.map(singleLocation => (
					<LocationCard
						deleteLocationProp={this.deleteLocation}
						key={singleLocation.id}
						locationProp={singleLocation}
					/>
				))}
			</div>
		);
	}
}

export default LocationList;
