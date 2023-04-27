import {Form, Button, Input, List, Item, StyledLink} from './MoviesPage.styled';
import { fetchMoviesBySearch } from 'services/moviesAPI';
import { Outlet,  useSearchParams, useLocation} from 'react-router-dom';
import {useState, useEffect, } from 'react'
const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState('')
  const query = searchParams.get('query');
  const location = useLocation()

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMoviesBySearch(query).then((res)=>setMovies(res.results));
  }, [query]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.search.value });
    e.currentTarget.reset();
  };

    return (
        <>
        <Form onSubmit={handleSubmit}>
        <Input type='text' value={searchText} name="search" onChange={handleChange}/>
        <Button type="submit" disabled={!searchText}>Search</Button>
        </Form>
        <List>{movies.map(({ id, title }) => (
          <Item key={id}>
            <StyledLink to={`${id}`} state={{from: location}}>
              {title}
            </StyledLink>
          </Item>
        ))}</List>
        <Outlet /></>
    )
}
export default MoviesPage;