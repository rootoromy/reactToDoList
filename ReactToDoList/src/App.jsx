//import { useState } from 'react'
//import styled from "styled-components";
//import styled, { css } from 'styled-components'
//import './App.scss'
//import { Container,Button } from "./styles";


import { ComponentStyles } from './components/ComponentStyles';


function App() {
  const onClickButton = () =>{
    alert('押された');
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
