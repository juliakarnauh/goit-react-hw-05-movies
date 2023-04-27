import styled from "styled-components";
export const CastList = styled.ul`
margin-left: 40px;
display: flex;
flex-wrap: wrap;
gap: 15px;
justify-content: center;
margin-bottom: 20px;
`
export const CastItem = styled.li`
box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.2);
text-align: center;
:hover{
    box-shadow: 0px 3px 0px 0px rgb(255,69,0);
}
`
export const CastTitle = styled.h2`
width: 300px;
font-weight: 600;
font-size: 28px;
line-height: 32px;
margin-bottom: 8px;
margin-top: 8px;
`
export const CastText = styled.p`
width: 300px;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: rgb(255,69,0);
margin-bottom: 8px;
`