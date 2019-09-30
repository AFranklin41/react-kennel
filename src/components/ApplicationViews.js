import { Route, withRouter, Redirect } from "react-router-dom";
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

class ApplicationViews extends Component {
	isAuthenticated = () => localStorage.getItem("credentials") !== null;

	render() {
		return (
			<React.Fragment>
				<Route
					exact
					path="/"
					render={props => {
						return <Home />;
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
						return <AnimalEditForm {...props} />;
					}}
				/>
				<Route
					exact
					path="/locations"
					render={props => {
						return <LocationList />;
					}}
				/>
				<Route
					path="/locations/:locationId(\d+)"
					render={props => {
						// Pass the locationId to the AnimalDetailComponent
						return (
							<LocationDetail
								{...props}
								locationId={parseInt(props.match.params.locationId)}
							/>
						);
					}}
				/>
				<Route
					path="/employees"
					render={props => {
						return <EmployeeList />;
					}}
				/>
				<Route
					path="/owners"
					render={props => {
						return <OwnerList />;
					}}
				/>
				<Route path="/login" component={Login} />
			</React.Fragment>
		);
	}
}

export default ApplicationViews;
