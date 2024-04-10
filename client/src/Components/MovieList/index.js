import { useEffect, useState } from 'react';
import MovieCard from '../MovieCard';
import '../index.css';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    const allMoviesApi = 'https://api.themoviedb.org/3/movie/popular?api_key=75c13cdf625213f137e50124e566ec92&language=en-US&page=1';

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(allMoviesApi);
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchMovies();
    }, []);
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
