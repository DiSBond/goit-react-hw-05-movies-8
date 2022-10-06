import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';

const Cast = ({ apiKey }) => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
    )
      .then(response => response.json())
      .catch(error => console.log(error))
      .then(result => setCast(result.cast));
  }, [id, apiKey]);

  return (
    <div>
      <ul>
        {cast.map(actor => {
          const imagePath = () => {
            if (actor.profile_path) {
              return `https://image.tmdb.org/t/p/w200${actor.profile_path}`;
            }
          };
          return (
            <li key={actor.id}>
              <img src={imagePath()} alt="" />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;

Cast.propTypes = { apiKey: propTypes.string };
