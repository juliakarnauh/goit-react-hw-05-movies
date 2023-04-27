import { StyledNav, StyledLink,StyledItem, StyledList } from "./Navigation.styled";
export const Navigation = ()=>{
    return(
        <StyledNav>
        <StyledList>
          <StyledItem>
            <StyledLink to="/">Home</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="movies">Movies</StyledLink>
          </StyledItem>
        </StyledList>
      </StyledNav>
    )
}