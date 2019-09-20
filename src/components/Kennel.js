import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";

import "./Kennel.css";

class Kennel extends Component {
	render() {
		return (
			<>
				<NavBar />
				<ApplicationViews />
			</>
		);
	}
}

export default Kennel;











// import React, { Component } from "react";
// import AnimalCard from "./animal/AnimalCard";
// import "./Kennel.css";
// import EmployeeCard from "./employee/EmployeeCard";
// import LocationCard from "./location/LocationCard";
// import OwnerCard from "./owner/OwnerCard";

// class Kennel extends Component {
// 	render() {
// 		return (
// 			<div className="container-main">
// 				<div className="section-content">
// 					<h2>
// 						Student Kennels
// 						<br />
// 						<small>Loving care when you're not there.</small>
// 					</h2>
// 					<address>
// 						Visit Us at the Nashville North Location
// 						<br />
// 						500 Puppy Way
// 					</address>
// 				</div>
// 				<h2 className="section-content">Pets: </h2>
// 				<div className="container-cards">
// 					<AnimalCard />
// 					<AnimalCard />
// 					<AnimalCard />
// 				</div>
// 				<h2 className="section-content">Employees: </h2>
// 				<div className="container-cards">
// 					<EmployeeCard />
// 				</div>
// 				<h2 className="section-content">Location: </h2>
// 				<div className="container-cards">
// 					<LocationCard />
// 				</div>
// 				<h2 className="section-content">Owner: </h2>
// 				<div className="container-cards">
// 					<OwnerCard />
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default Kennel;
