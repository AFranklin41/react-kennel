const remoteURL = "http://localhost:5002";

export default {
	get(id) {
		return fetch(`${remoteURL}/owners/${id}`).then(result => result.json());
	},
	getOwnersLocations(id) {
		return fetch(`${remoteURL}/ownersLocations/${id}`).then(result => result.json());
	},
	getAll() {
		return fetch(`${remoteURL}/owners`).then(result => result.json());
	}
};