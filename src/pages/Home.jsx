import styled from '@emotion/styled';
import { NavLink, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';

const Home = ({ trendMovies }) => {
  const location = useLocation();
  const StyledLink = styled(NavLink)`
    color: black;

    &.active {
      color: orange;
    }
  `;

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendMovies.map(movie => {
          return (
            <li key={movie.id}>
              <StyledLink to={`${movie.id}`} state={{ from: location }}>
                {movie.title ? movie.title : movie.name}
              </StyledLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;

Home.propTypes = {
  trendMovies: propTypes.arrayOf(propTypes.object),
};
