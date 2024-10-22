//import { useState } from 'react'
//import styled from "styled-components";
//import styled, { css } from 'styled-components'
//import './App.scss'
//import { Container,Button } from "./styles";
import styled from "styled-components";

/*
const GlobalStyle = createGlobalStyle`
body {
  justify-content:center;
}
`;
*/

const Button = styled.button`
font-size: 1rem;
text-align: center;
color: red;
border: 2px solid #BF4F74;
`;

const Container = styled.section`
font-size: 1rem;
text-align: center;
color: blue;
background-color: yellow;
padding: 30px;
`;

const Input = styled.input`
width: 300px;
height: 30px;
`;

const InputWrap = styled.div`
display: flex;
flex-direction: row;
`;

const ColoredMessage = styled.div`
  color: props.color;
  font-size: 20px;
`;

ColoredMessage = (props) => {
  console.log(props);
};
function App() {
  const onClickButton = () =>{
    alert('押された');
  };
  return (
    <>
      <Container>
        <h1>TO DO List</h1>
        <InputWrap className="inputWrap">
          <Input type="text" />
          <Button onClick={onClickButton}>TODO</Button>
        </InputWrap>
        <ColoredMessage color={"pink"} message={"ここにTODOが表示されます"}/>
      </Container>
    </>
  )
}

export default App
