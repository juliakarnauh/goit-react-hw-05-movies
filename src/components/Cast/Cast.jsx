import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCast } from 'services/moviesAPI';
import { CastList, CastItem, CastTitle, CastText } from './Cast.styled';
const CastPage = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMoviesCast(movieId)
      .then(setCast)
      .catch(error => {
        console.error(error);
        setCast([]);
      });
  }, [movieId]);

  return (
    <CastList>
      {cast.map(({ id, profile_path, original_name, character }) => {
        let imageUrl = `https://image.tmdb.org/t/p/w200/${profile_path}`;
        try {
          return (
            <CastItem key={id}>
              {profile_path ? (
                <img
                  src={imageUrl}
                  alt={original_name}
                  width="300"
                  height="450"
                />
              ) : (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RbuAj7zoRZSIDcV_nz2LyZZjwiOETmn7kg&usqp=CAU"
                  alt={original_name}
                  width="300"
                  height="450"
                />
              )}
              <CastTitle>{original_name}</CastTitle>
              <CastText>Character: {character}</CastText>
            </CastItem>
          );
        } catch (error) {
          console.error(error);
          return null;
        }
      })}
    </CastList>
  );
};
export default CastPage;
