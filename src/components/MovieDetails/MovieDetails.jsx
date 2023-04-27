import React, { useEffect, useState } from 'react';
import {Outlet,useLocation,useNavigate,useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/moviesAPI';
import { Button, MovieDetailsDiv, MovieTitle, MovieUpperTitle, MovieText, TextDiv, InfoDiv, StyledLink, MovieList, MovieItem } from './MovieDetails.styled';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
  
    console.log(location);
  
    useEffect(() => {
      fetchMoviesById(movieId).then(setMovie);
    }, [movieId]);
  
    return (
      <>
        <Button
          type="button"
          onClick={() => {
            navigate(location?.state?.from ?? '/');
          }}
        >
          &#8592; Go back
        </Button>
        {movie && (
          <MovieDetailsDiv>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.original_title}
              width="300" />
            <TextDiv>
              <MovieTitle>
                {movie.original_title} ({movie.release_date.slice(0, 4)})
              </MovieTitle>
              <MovieText>User score: {Number.parseInt(movie.vote_average * 10)}%</MovieText>
              
                <MovieUpperTitle>Overview </MovieUpperTitle>
                <MovieText> {movie.overview}</MovieText>
              
                <MovieUpperTitle>Genres</MovieUpperTitle>
                <MovieText>{movie.genres.reduce((acc, genre) => {
          return `${acc + genre.name} ` }, '')}</MovieText>
            </TextDiv>
          </MovieDetailsDiv>
        )}
        <InfoDiv>
          <MovieTitle>Additional information</MovieTitle>
          <MovieList>
            <MovieItem>
          <StyledLink to="cast" state={location.state}>
            Cast
          </StyledLink></MovieItem>
          <MovieItem>
          <StyledLink to="reviews" state={location.state}>
            Reviews
          </StyledLink></MovieItem>
          </MovieList>
        </InfoDiv>
        <Outlet />
      </>
    );
  };
  export default MovieDetailsPage;