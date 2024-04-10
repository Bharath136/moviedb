import { Link } from 'react-router-dom';
import '../index.css';

const MovieCard = ({ movie }) => {
    const { id, title, backdrop_path, vote_average } = movie;

    const imageDomain = 'https://image.tmdb.org/t/p/w500';
    const fullPath = imageDomain + backdrop_path;

    const roundedVoteAverage = vote_average.toFixed(1);

    return (
        <Link to={`/movie/${id}`} className='movie-details-link'>
            <div className="movie-card">
                <img src={fullPath} alt={title} />
                <h2 className='movie-title'>{title}</h2>
                <p className='movie-rating'>Rating: {roundedVoteAverage}</p>
            </div>
        </Link>
    );
};

export default MovieCard;
