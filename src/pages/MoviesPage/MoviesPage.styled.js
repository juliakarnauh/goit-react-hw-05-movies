import styled from "styled-components";
import { Link } from 'react-router-dom';
export const Form = styled.form`
padding: 30px 40px;
display:flex;
gap: 5px;`
export const Input = styled.input`
width: 260px;
height: 33px;
border: 2px solid black;
border-radius: 4px;
:hover{
    border: 2px solid rgb(255,69,0);
}`
export const Button = styled.button`
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
}
`
export const List = styled.ul`
margin-bottom: 8px;
margin-left: 40px;
`
export const Item = styled.li`
font-weight: 400;
font-size: 20px;
line-height: 36px;
color: #263238;
`

export const StyledLink = styled(Link)`
:hover{
    color: rgb(255,69,0);
}
`