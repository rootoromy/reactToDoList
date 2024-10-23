//import { useState } from 'react'
//import styled from "styled-components";
//import styled, { css } from 'styled-components'
//import './App.scss'
//import { Container,Button } from "./styles";


import { GlobalStyle, Button, Container, Input, InputWrap, ColoredMessage } from './components/ComponentStyles';

function App() {
  const onClickButton = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>TO DO List</h1>
        <InputWrap className="inputWrap">
          <Input type="text" />
          <Button onClick={onClickButton}>TODO</Button>
        </InputWrap>
        <ColoredMessage $primary>メッセージが入ります</ColoredMessage>
      </Container>
    </>
  )
}

export default App
