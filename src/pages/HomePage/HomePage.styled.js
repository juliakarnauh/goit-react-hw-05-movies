import styled from "styled-components";
import { Link } from 'react-router-dom';
export const StyledLink = styled(Link)`
:hover{
    color: rgb(255,69,0);
}
`
export const HomeSection = styled.div`
padding-left: 40px;`
export const HomeTitle = styled.h1`
font-weight: 600;
font-size: 48px;
line-height: 72px;`
export const HomeList = styled.ul`
margin-top: 8px;`
export const HomeItem = styled.li`
font-weight: 400;
font-size: 20px;
line-height: 36px;
color: #263238;
`