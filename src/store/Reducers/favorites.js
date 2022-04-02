const INITIAL_STATE = {
	counter: 0,
	favoriteMovies: [],
};
export const favouriteReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "add":
			return {
				...state,
				favoriteMovies: action.payload,
			};
		case "delete":
			return {
				...state,
				favoriteMovies: action.payload,
			};
		case "SET_COUNTER":
			return {
				...state,
				counter: action.payload,
			};
		default:
			return state;
	}
};
