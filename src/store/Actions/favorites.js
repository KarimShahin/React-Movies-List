export const setFavourites = (payload) => {
	return {
		type: "add",
		payload,
	};
};

export const deleteFavourites = (payload) => {
	return {
		type: "delete",
		payload,
	};
};

export const SET_COUNTER = (payload) => {
	return {
		type: "SET_COUNTER",
		payload,
	};
};
