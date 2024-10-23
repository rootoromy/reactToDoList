import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  background-color: pink;
  margin: 0 auto;
  justify-content: center;
}
`

export const Button = styled.button`
font-size: 1rem;
text-align: center;
color: red;
border: 2px solid #BF4F74;
`;

export const Container = styled.section`
font-size: 1rem;
text-align: center;
color: blue;
background-color: skyblue;
padding: 30px;
`;

export const Input = styled.input`
width: 300px;
height: 30px;
`;

export const InputWrap = styled.div`
display: flex;
flex-direction: row;
`;

export const ColoredMessage = styled.div`
  font-size: 20px;
  ${props => props.$primary && `
  color: green;
  font-weight: 700;
  background-color: aqua;
  `}
`;

