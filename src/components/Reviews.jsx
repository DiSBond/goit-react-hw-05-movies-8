import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';

const Reviews = ({ apiKey }) => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`
    )
      .then(response => response.json())
      .catch(error => console.log(error))
      .then(result => setReviews(result.results));
  }, [apiKey, id]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p>We dont have any reviews for this movie</p>
      ) : (
        <ul>
          {reviews.map(item => {
            return (
              <li key={item.id}>
                <b>Author: {item.author}</b>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Reviews;

Reviews.propTypes = { apiKey: propTypes.string };
