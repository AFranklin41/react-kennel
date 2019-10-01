import React, { Component } from "react";
import OwnerManager from "../../modules/OwnerManager";
import "./OwnerForm.css";

class OwnerForm extends Component {
	state = {
		ownerName: "",
		ownerPhone: "",
		loadingStatus: false
	};

	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	constructNewOwner = evt => {
		evt.preventDefault();
		if (this.state.ownerName === "" || this.state.ownerPhone === "") {
			window.alert("Please input a name");
		} else {
			this.setState({ loadingStatus: true });
			const owner = {
				name: this.state.ownerName,
				phoneNumber: this.state.ownerPhone
			};

			// Create the animal and redirect user to animal list
			OwnerManager.post(owner).then(() =>
				this.props.history.push("/owners")
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
								id="ownerName"
								placeholder="name"
							/>
							<label htmlFor="ownerName">Owner Name: </label>
                            <input
								type="text"
								required
								onChange={this.handleFieldChange}
								id="ownerPhone"
								placeholder="phone"
							/>
							<label htmlFor="ownerPhone">Phone Numer: </label>
						</div>
						<div className="alignRight">
							<button
								type="button"
								disabled={this.state.loadingStatus}
								onClick={this.constructNewOwner}
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

export default OwnerForm;
