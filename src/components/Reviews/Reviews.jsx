import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReview } from 'services/moviesAPI';
import {ReviewsTitle, ReviewsList, ReviewsItem, ReviewsUpperTitle, ReviewsText} from './Reviews.styled'
const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMoviesReview(movieId).then((res)=>setReviews(res.results));
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <ReviewsTitle>We don't have any reviews for this movie.</ReviewsTitle>
      ) : (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => {
            return (
              <ReviewsItem key={id}>
                <ReviewsUpperTitle>Author: {author}</ReviewsUpperTitle>
                <ReviewsText>{content}</ReviewsText>
              </ReviewsItem>
            );
          })}
        </ReviewsList>
      )}
    </>
  );
};

export default ReviewsPage;