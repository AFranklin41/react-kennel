import React, { Component } from "react";

class LocationCard extends Component {
	render() {
		return (
			<div className="card">
				<div className="card-content">
					<picture>
						{/* <img src={require("./dog.svg")} alt="My Dog" /> */}
					</picture>
					<h3>
						<span className="card-location">
							{this.props.locationProp.address}
						</span>
					</h3>
					<h4>
						<span>
							{this.props.locationProp.city}, {this.props.locationProp.state}
						</span>
					</h4>
				</div>
			</div>
		);
	}
}

export default LocationCard;