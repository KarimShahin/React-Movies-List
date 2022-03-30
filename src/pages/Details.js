import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../network/axiosConfig";
export default function Details() {
	const [movie, setMovie] = useState({});
	const [genres, setGenres] = useState([]);
	const params = useParams();
	useEffect(() => {
		axiosInstance
			.get(`${params.id}?api_key=9849e10f8eceee7a7a88ed18e3b6f6e7`)
			.then((res) => {
				setMovie(res.data);
				setGenres(res.data.genres);
			})
			.catch((error) => console.log(error));
	}, []);
	return (
		<>
			<div className="my-card-land">
				<img className="my-card-img-land" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
				<div className="my-card-content-land">
					<h1 className="my-card-title-land">{movie.title}</h1>
					<h2>{movie.tagline}</h2>
					<div style={{ display: "flex", gap: "0.5em", marginBlockEnd: "0.5em", color: "#c4c4c4" }}>
						{genres.map((genre) => (
							<span key={genre.id}>{genre.name}</span>
						))}
					</div>
					<h6>{movie.overview}</h6>
				</div>
			</div>
		</>
	);
}
