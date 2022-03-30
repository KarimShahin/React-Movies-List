import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../network/axiosConfig";

export default function Movies() {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		axiosInstance
			.get("popular?api_key=9849e10f8eceee7a7a88ed18e3b6f6e7")
			.then((res) => setMovies(res.data.results))
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			{movies.map((movie) => {
				return (
					<div key={movie.id} className="my-card">
						<Link to={`movies/${movie.id}`}>
							<img
								className="my-card-img"
								src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
								alt="an iphone on a macbook with dramatic lighting"
							/>
						</Link>
						<div className="my-card-content">
							<h2 className="my-card-title">{movie.title}</h2>
						</div>
					</div>
				);
			})}
		</>
	);
}
