import React, { Component } from "react";
import { Link } from "react-router-dom";

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
					<button
						onClick={() =>
							this.props.deleteLocationProp(this.props.locationProp.id)
						}
					>
						Close
					</button>
					<Link to={`/locations/${this.props.locationProp.id}`}>
						<button>Details</button>
					</Link>
					<button
						type="button"
						onClick={() => {
							this.props.history.push(
								`/locations/${this.props.locationProp.id}/edit`
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

export default LocationCard;
