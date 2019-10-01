import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import LocationDetail from "./location/LocationDetail";
import EmployeeList from "./employee/EmployeeList";
import LocationList from "./location/LocationList";
import OwnerList from "./owner/OwnerList";
import Login from "./auth/Login";
import AnimalEditForm from "./animal/AnimalEditForm";
import EmployeeForm from "./employee/EmployeeForm";
import OwnerForm from "./owner/OwnerForm";
import LocationForm from "./location/LocationForm";
import EmployeeEditForm from "./employee/EmployeeEditForm";
import LocationEditForm from "./location/LocationEditForm";
import OwnerEditForm from "./owner/OwnerEditForm";

class ApplicationViews extends Component {
	isAuthenticated = () => localStorage.getItem("credentials") !== null;

	render() {
		return (
			<React.Fragment>
				<Route
					path="/home"
					render={props => {
						if (this.isAuthenticated()) {
							return <Home />;
						} else {
							return <Redirect to="/login" />;
						}
					}}
				/>
				<Route
					exact
					path="/animals"
					render={props => {
						if (this.isAuthenticated()) {
							return <AnimalList {...props} />;
						} else {
							return <Redirect to="/login" />;
						}
					}}
				/>
				<Route
					exact
					path="/animals/:animalId(\d+)"
					render={props => {
						// Pass the animalId to the AnimalDetailComponent
						return this.isAuthenticated() ? (
							<AnimalDetail
								{...props}
								animalId={parseInt(props.match.params.animalId)}
							/>
						) : (
							<Redirect to="/login" />
						);
					}}
				/>
				<Route
					path="/animals/new"
					render={props => {
						return this.isAuthenticated() ? (
							<AnimalForm {...props} />
						) : (
							<Redirect to="/login" />
						);
					}}
				/>
				<Route
					path="/animals/:animalId(\d+)/edit"
					render={props => {
						return this.isAuthenticated() ? (
							<AnimalEditForm {...props} />
						) : (
							<Redirect to="/login" />
						);
					}}
				/>
				<Route
					exact
					path="/locations"
					render={props => {
						return this.isAuthenticated() ? (
							<LocationList {...props} />
						) : (
							<Redirect to="/login" />
						);
					}}
				/>
				<Route
					path="/locations/new"
					render={props => {
						return this.isAuthenticated() ? (
							<LocationForm {...props} />
						) : (
							<Redirect to="/login" />
						);
					}}
				/>
				<Route
					path="/locations/:locationId(\d+)"
					render={props => {
						return this.isAuthenticated() ? (
							<LocationDetail
								{...props}
								locationId={parseInt(props.match.params.locationId)}
							/>
						) : (
							<Redirect to="/login" />
						);
						// Pass the locationId to the AnimalDetailComponent
					}}
				/>
				<Route
					path="/locations/:locationId(\d+)/edit"
					render={props => {
						return this.isAuthenticated() ? (
							<LocationEditForm {...props} />
						) : (
							<Redirect to="/login" />
						);
					}}
				/>
				<Route
					exact
					path="/employees"
					render={props => {
						return this.isAuthenticated() ? (
							<EmployeeList {...props} />
						) : (
							<Redirect to="/login" />
						);
					}}
				/>
				<Route
					path="/employees/new"
					render={props => {
						return this.isAuthenticated() ? (
							<EmployeeForm {...props} />
						) : (
							<Redirect to="/login" />
						);
					}}
				/>
				<Route
					path="/employees/:employeeId(\d+)/edit"
					render={props => {
						return this.isAuthenticated() ? (
							<EmployeeEditForm {...props} />
						) : (
							<Redirect to="/login" />
						);
					}}
				/>
				<Route
					exact
					path="/owners"
					render={props => {
						return this.isAuthenticated() ? (
							<OwnerList {...props} />
						) : (
							<Redirect to="/login" />
						);
					}}
				/>
				<Route
					path="/owners/new"
					render={props => {
						return this.isAuthenticated() ? (
							<OwnerForm {...props} />
						) : (
							<Redirect to="/login" />
						);
					}}
				/>
				<Route
					path="/owners/:ownerId(\d+)/edit"
					render={props => {
						return this.isAuthenticated() ? (
							<OwnerEditForm {...props} />
						) : (
							<Redirect to="/login" />
						);
					}}
				/>
				<Route path="/login" component={Login} />
			</React.Fragment>
		);
	}
}

export default ApplicationViews;
