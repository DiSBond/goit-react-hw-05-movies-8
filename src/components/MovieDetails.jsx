import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import propTypes from 'prop-types';
import { Suspense } from 'react';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const MovieDetails = ({ apiKey }) => {
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();

  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
      .then(response => response.json())
      .catch(error => console.log(error))
      .then(result => setMovieDetails(result));
  }, [apiKey, id]);

  const poster_path = () => {
    if (movieDetails.poster_path) {
      return `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
    }
  };

  const backLonkHref = location.state?.from ?? '/';
  return (
    <div>
      <button>
        <StyledLink to={backLonkHref}>Go back</StyledLink>
      </button>
      <div>
        <img src={poster_path()} alt="" />
        <h1>{movieDetails.title ? movieDetails.title : movieDetails.name}</h1>
        <p>User Score: {movieDetails.vote_average}</p>
        <h2>Overview</h2>
        <p>{movieDetails.overview}</p>
        <h3>Genres</h3>
        <ul>
          {movieDetails.genres &&
            movieDetails.genres.map(genre => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
        </ul>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <StyledLink to="cast" state={{ from: backLonkHref }}>
              Cast
            </StyledLink>
          </li>
          <li>
            <StyledLink to="reviews" state={{ from: backLonkHref }}>
              Reviews
            </StyledLink>
          </li>
        </ul>
      </div>
      <div>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;

MovieDetails.propTypes = { apiKey: propTypes.string };
