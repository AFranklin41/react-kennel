import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Animal.css";

class AnimalCard extends Component {
	render() {
		return (
			<div className="card">
				<div className="card-content">
					<picture>
						<img src={require("./dog.svg")} alt="My Dog" />
					</picture>
					<h3>
						Name:{" "}
						<span className="card-petname">{this.props.animalProp.name}</span>
					</h3>
					<p>{this.props.animalProp.breed}</p>
					<Link to={`/animals/${this.props.animalProp.id}`}>
						<button>Details</button>
					</Link>
					<button
						type="button"
						onClick={() => {
							this.props.history.push(
								`/animals/${this.props.animalProp.id}/edit`
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

export default AnimalCard;
