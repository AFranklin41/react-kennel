import React, { Component } from "react";
import OwnerManager from "../../modules/OwnerManager";
import "./OwnerForm.css";

class OwnerEditForm extends Component {
	//set the initial state
	state = {
		ownerName: "",
		ownerPhone: "",
		loadingStatus: true
	};

	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	updateExistingOwner = evt => {
		evt.preventDefault();
		this.setState({ loadingStatus: true });
		const editedOwner = {
			id: this.props.match.params.OwnerId,
			name: this.state.ownerName,
			phonenumber: this.state.ownerPhone
		};

		OwnerManager.update(editedOwner).then(() =>
			this.props.history.push("/owners")
		);
	};

	componentDidMount() {
		OwnerManager.get(this.props.match.params.ownerId).then(owner => {
			this.setState({
				ownerName: owner.name,
				ownerPhone: owner.phonenumber,
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
								id="ownerName"
								value={this.state.ownerName}
							/>
							<label htmlFor="ownerName">Owner Name: </label>

							<input
								type="text"
								required
								className="form-control"
								onChange={this.handleFieldChange}
								id="ownerPhone"
								value={this.state.ownerPhone}
							/>
							<label htmlFor="ownerPhone">Owner Phone: </label>
						</div>
						<div className="alignRight">
							<button
								type="button"
								disabled={this.state.loadingStatus}
								onClick={this.updateExistingEmployee}
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

export default OwnerEditForm;
