import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const StyledNav = styled.nav`
padding-top: 15px;
padding-bottom:15px;
padding-left: 40px;
display: flex;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`
export const StyledList = styled.ul`
display: flex;
gap: 20px;`
export const StyledItem = styled.li``
export const StyledLink = styled(NavLink)`
font-weight: 600;
font-size: 48px;
line-height: 60px;
  color: black;
  &.active {
    color: rgb(255,69,0);
  }
`;