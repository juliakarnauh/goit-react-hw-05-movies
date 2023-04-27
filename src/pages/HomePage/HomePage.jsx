import { useState, useEffect } from 'react';
import { useLocation  } from 'react-router-dom';
import { fetchMovies } from 'services/moviesAPI';
import {StyledLink, HomeSection, HomeTitle, HomeList, HomeItem} from './HomePage.styled'
 const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchMovies().then((res)=>setMovies(res.results));
  }, []);
  console.log(movies)
  return (
    <HomeSection>
      <HomeTitle>Trending Today</HomeTitle>
      <HomeList>
        {movies.map(({ original_title, id }) => (
          <HomeItem key={id}>
            <StyledLink to={`movies/${id}`} state={{ from: location }}>{original_title}</StyledLink>
          </HomeItem>
        ))}
      </HomeList>
      {/* <Outlet /> */}
    </HomeSection>
  );
};
export default HomePage