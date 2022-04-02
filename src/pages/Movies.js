import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { axiosInstance } from "../network/axiosConfig";
import { SET_COUNTER, setFavourites, deleteFavourites } from "../store/Actions/favorites.js";

export default function Movies() {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		axiosInstance
			.get("popular?api_key=9849e10f8eceee7a7a88ed18e3b6f6e7")
			.then((res) => setMovies(res.data.results))
			.catch((error) => console.log(error));
	}, []);
	const dispatch = useDispatch();
	const favoriteMovies = useSelector((state) => state.favoriteMovies);
	const favoriteMoviesCount = useSelector((state) => state.counter);
	const toggleFavourites = (event) => {
		event.target.classList.toggle("checked");
		const classArray = Array.from(event.target.classList);
		const movie = movies[event.target.id];
		if (classArray.includes("checked")) {
			dispatch(SET_COUNTER(favoriteMoviesCount + 1));
			dispatch(setFavourites([...favoriteMovies, movie]));
		} else {
			dispatch(SET_COUNTER(favoriteMoviesCount - 1));
			dispatch(deleteFavourites(favoriteMovies.filter((favMovie) => favMovie.id !== movie.id)));
		}
	};

	return (
		<>
			{movies.map((movie, index) => {
				return (
					<div key={movie.id} className="my-card">
						<Link to={`movies/${movie.id}`}>
							<img
								className="my-card-img"
								src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
								alt="an iphone on a macbook with dramatic lighting"
							/>
						</Link>
						<span
							className={`fa fa-star star ${
								favoriteMovies.findIndex((fav) => fav.id == movie.id) != -1 ? "checked" : ""
							}`}
							id={index}
							onClick={toggleFavourites}
						></span>
						<div className="my-card-content">
							<h2 className="my-card-title">{movie.title}</h2>
						</div>
					</div>
				);
			})}
		</>
	);
}
