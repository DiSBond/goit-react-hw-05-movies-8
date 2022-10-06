import { useState, useEffect, lazy } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { Header, Navigation } from './AppStyled';
import Home from 'pages/Home';
import Cast from './Cast';
import Reviews from './Reviews';
import Movie from 'pages/Movies';

// 1
const API_KEY = '75c24a83ea1b0d719afcd7ae1388bd28';

const StyledLink = styled(NavLink)`
  color: black;
  margin-left: 20px;

  &.active {
    color: orange;
  }
`;

const MovieDetails = lazy(() => import('../components/MovieDetails'));

export const App = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
      .then(response => response.json())
      .catch(error => console.log(error))
      .then(result => setTrendMovies(result.results));
  }, []);

  return (
    <div>
      <Header>
        <Navigation>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="Movie">Movie</StyledLink>
        </Navigation>
      </Header>

      <Routes>
        <Route path="/" element={<Home trendMovies={trendMovies} />}></Route>
        <Route path="movie" element={<Movie apiKey={API_KEY} />}></Route>

        <Route path="movie/:id" element={<MovieDetails apiKey={API_KEY} />}>
          <Route path="cast" element={<Cast apiKey={API_KEY} />} />
          <Route path="reviews" element={<Reviews apiKey={API_KEY} />} />
        </Route>

        <Route path="/:id" element={<MovieDetails apiKey={API_KEY} />}>
          <Route path="cast" element={<Cast apiKey={API_KEY} />} />
          <Route path="reviews" element={<Reviews apiKey={API_KEY} />} />
        </Route>
      </Routes>
    </div>
  );
};
