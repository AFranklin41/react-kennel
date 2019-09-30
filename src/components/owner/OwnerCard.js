import React, { Component } from "react";

class OwnerCard extends Component {
	render() {
		return (
			<div className="card">
				<div className="card-content">
					<picture>
						{/* <img src={require("./dog.svg")} alt="My Dog" /> */}
					</picture>
					<h3>
						<span className="card-owner">{this.props.ownerProp.name}</span>
					</h3>
					<h4>
						<span>{this.props.ownerProp.phonenumber}</span>
					</h4>
					<button
						onClick={() =>
							this.props.deleteOwnerProp(this.props.ownerProp.id)
						}
					>
						Remove
					</button>
				</div>
			</div>
		);
	}
}

export default OwnerCard;
