//import { useState } from 'react'
//import styled from "styled-components";
//import styled, { css } from 'styled-components'
//import './App.scss'
//import { Container,Button } from "./styles";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  justify-content:center;
}
`;

const Button = styled.button`
font-size: 1.5em;
text-align: center;
color: red;
border: 2px solid #BF4F74;
`;

const Container = styled.section`
font-size: 1.5em;
text-align: center;
color: blue;
background-color: yellow;
`;

function App() {
  return (
    <>
      <Container>
        <h1>TO DO List</h1>
        <Button>Normal Button</Button>
        <Button $primary>Primary Button</Button>
      </Container>
    </>
  )
}

export default App
