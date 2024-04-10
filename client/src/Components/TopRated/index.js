import React, { useEffect, useState } from 'react';
import '../index.css';
import MovieCard from '../MovieCard';
import axios from 'axios';

const TopRatedMovie = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const searchApi = 'https://api.themoviedb.org/3/search/movie?api_key=75c13cdf625213f137e50124e566ec92&language=en-US&page=1&query=';

    const topRatedApi = 'https://api.themoviedb.org/3/movie/top_rated?api_key=75c13cdf625213f137e50124e566ec92&language=en-US&page=1';

    useEffect(() => {
        const fetchTopRatedMovies = async () => {
            try {
                const response = await axios.get(topRatedApi);
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching top rated movies:', error);
            }
        };
        fetchTopRatedMovies();
    }, []);

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (searchQuery.trim() !== '') {
                try {
                    const response = await axios.get(searchApi + encodeURIComponent(searchQuery));
                    setSearchResults(response.data.results);
                } catch (error) {
                    console.error('Error fetching search results:', error);
                }
            } else {
                setSearchResults([]);
            }
        };
        fetchSearchResults();
    }, [searchQuery]);

    const handleChange = event => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="container">
            <div className='heading-container'>
                <h1 className='heading'>Top Rated Movies</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Search a movie"
                        value={searchQuery}
                        onChange={handleChange}
                        className='search-input'
                    />
                </div>
            </div>
            <div className="movie-list">
                {searchQuery && searchResults.length === 0 && (
                    <p>No movies found</p>
                )}
                {(searchQuery ? searchResults : movies).map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default TopRatedMovie;
