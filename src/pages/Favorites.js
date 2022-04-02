import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFavourites, SET_COUNTER } from "../store/Actions/favorites";

export default function Favorites() {
	const favourites = useSelector((state) => state.favoriteMovies);
	const count = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	const removeFromFavourites = (event) => {
		const movie = favourites[event.target.id];
		event.target.classList.remove("checked");
		dispatch(SET_COUNTER(count - 1));
		dispatch(deleteFavourites(favourites.filter((fav) => fav.id != movie.id)));
	};
	return (
		<>
			{favourites.map((movie, index) => {
				return (
					<div key={movie.id} className="my-card">
						<Link to={`movies/${movie.id}`}>
							<img
								className="my-card-img"
								src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
								alt="an iphone on a macbook with dramatic lighting"
							/>
						</Link>
						<span className="fa fa-star star checked" id={index} onClick={removeFromFavourites}></span>
						<div className="my-card-content">
							<h2 className="my-card-title">{movie.title}</h2>
						</div>
					</div>
				);
			})}
		</>
	);
}
