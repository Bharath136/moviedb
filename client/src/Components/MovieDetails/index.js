// MovieDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../index.css'

const MovieDetails = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=75c13cdf625213f137e50124e566ec92&language=en-US`);
                setMovieDetails(movieResponse.data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        const fetchCast = async () => {
            try {
                const castResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=75c13cdf625213f137e50124e566ec92&language=en-US`);
                setCast(castResponse.data.cast);
            } catch (error) {
                console.error('Error fetching cast:', error);
            }
        };

        fetchMovieDetails();
        fetchCast();
    }, [id]);

    return (
        <div className="container">
            <div className='movie-details-bg-container'>
                <div className='movie-details-container'>
                    <div className='movie-details-bg'>
                        <img src={"https://image.tmdb.org/t/p/w500" + movieDetails.poster_path} alt='img' className='poster-image' />
                        <div className='movie-details'>
                            <h1>{movieDetails.original_title}</h1>
                            <p><strong>Rating: </strong>{movieDetails.popularity}</p>
                            <p>{movieDetails.runtime} {movieDetails.tagline}</p>
                            <p><strong>Release Date: </strong>{movieDetails.release_date}</p>
                        </div>
                    </div>
                    <h2><strong>Overview </strong></h2>
                    <p>{movieDetails.overview}</p>
                </div>
                <img src={"https://image.tmdb.org/t/p/w500" + movieDetails.backdrop_path} alt='img' className='background-image' />
            </div>

            <div className='cast-container'>
            <h1>Cast</h1>
                <div className='cast-list'>
                {cast.map(each => (
                    <div className='cast-card' key={each.id}>
                        <img src={"https://image.tmdb.org/t/p/w500" + each.profile_path} alt={each.name} className='cast-image' />
                        <p className='charactor'><strong>{each.character}</strong></p>
                        <p className='charactor'>{each.name}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
