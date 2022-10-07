import { useState, useEffect } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import styled from '@emotion/styled';

import propTypes from 'prop-types';

const Movie = ({ apiKey }) => {
  //   const [searchMovie, setSearchMovie] = useState('');

  const [searchResult, setSearchResult] = useState([]);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const [textSearch, setTextSearch] = useState('');

  const StyledLink = styled(NavLink)`
    color: black;

    &.active {
      color: orange;
    }
  `;

  useEffect(() => {
    if (search !== '') {
      setTextSearch(search);
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=75c24a83ea1b0d719afcd7ae1388bd28&language=en-US&page=1&include_adult=false&query=${search}`
      )
        .then(response => response.json())
        .catch(error => console.log(error))
        .then(result => setSearchResult(result.results));
    }
  }, [search]);

  const onSubmit = event => {
    event.preventDefault();
    setSearchParams(textSearch !== '' ? { search: textSearch } : {});

    if (textSearch.trim() === '') {
      alert('Строка запроса пуста');
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${textSearch}`
    )
      .then(response => response.json())
      .catch(error => console.log(error))
      .then(result => setSearchResult(result.results));
  };

  // const searchSubmit = event => {
  //   event.preventDefault();

  //   // setSearch(textSearch);
  //   // setSearchParams(textSearch !== '' ? { search: textSearch } : {});

  //   // if (textSearch.trim() === '') {
  //   //   alert('Строка запроса пуста');
  //   //   return;
  //   // }

  //   onSubmit(search);
  // };

  // const setSearch = value => {
  //   setSearchParams(value !== '' ? { search: value } : {});
  // };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <button type="submit">Search</button>
        <input type="text" onChange={e => setTextSearch(e.target.value)} />
      </form>
      <div>
        <ul>
          {searchResult &&
            searchResult.map(item => {
              const path = `/Movie/${item.id}`;
              return (
                <li key={item.id}>
                  <StyledLink to={path} state={{ from: location }}>
                    {item.title}
                  </StyledLink>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Movie;

Movie.propTypes = { apiKey: propTypes.string };
