
import styled from "styled-components";
import { Link } from 'react-router-dom';
export const StyledLink = styled(Link)`
:hover{
    color: rgb(255,69,0);
}
&.active {
    color: rgb(255,69,0);
  }
`
export const Button = styled.button`
position: absolute;
z-index: 1000;
top: 30px;
  right:40px;
text-align: center;
letter-spacing: 0.03em;
padding: 2px 8px;
color: white;
font-weight: 400;
font-size: 20px;
line-height: 32px;
background-color: black;
border: 2px solid black;
border-radius: 4px;
:hover{
    border: 2px solid rgb(255,69,0);
    background-color: rgb(255,69,0);
}`
export const MovieDetailsDiv = styled.div`
margin-left: 40px;
margin-top: 20px;
display: flex;
gap: 15px;
align-items: flex-start;
margin-bottom: 20px;
position: relative;` 
export const MovieTitle = styled.h2`
font-weight: 600;
font-size: 48px;
line-height: 72px;
margin-bottom: 10px;

`

export const MovieUpperTitle = styled.strong`
font-weight: 600;
font-size: 32px;
line-height: 48px;
margin-bottom: 10px;
color: rgb(255,69,0);
`
export const MovieText = styled.p`
font-weight: 400;
font-size: 24px;
line-height: 32px;
margin-bottom: 10px;
width: 800px;

`
export const TextDiv = styled.div``
export const InfoDiv = styled.div`
margin-left: 40px;
position: relative;
&::after {
    position: absolute;
  bottom: -15px;
    left: 0;
    content: "";
    width: 97%;
    height: 4px;
    background-color: rgb(255,69,0);
    border-radius: 2px;
  }}`
export const MovieList = styled.ul`
margin-bottom: 30px;
`
export const MovieItem = styled.li`
font-weight: 600;
font-size: 24px;
line-height: 32px;
color: #263238;
margin-bottom: 10px;`