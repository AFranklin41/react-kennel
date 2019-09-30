import React, { Component } from "react";
//import the components we will need
import OwnerCard from "./OwnerCard.js";
import OwnerManager from "../../modules/OwnerManager.js";

class OwnerList extends Component {
	//define what this component needs to render
	state = {
		owners: []
	};

	deleteOwner = id => {
		OwnerManager.delete(id).then(() => {
			OwnerManager.getAll().then(parsedOwners => {
				this.setState({
					owners: parsedOwners
				});
			});
		});
	};

    componentDidMount() {
		console.log("OWNERS LIST: ComponentDidMount");
		//getAll from AnimalManager and hang on to that data; put it in state
		OwnerManager.getAll().then(owners => {
			this.setState({
				owners: owners
			});
		});
	}

	render() {
		console.log("OWNERS LIST: Render");

		return (
			<div className="container-cards">
				{this.state.owners.map(singleOwner => (
					<OwnerCard deleteOwnerProp={this.deleteOwner} key={singleOwner.id} ownerProp={singleOwner} />
				))}
			</div>
		);
	}
}

export default OwnerList;