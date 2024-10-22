//import { useState } from 'react'
//import styled from "styled-components";
//import styled, { css } from 'styled-components'
//import './App.scss'
import { Container,Button } from "./styles";

function App() {
  return (
    <>
      <Container>
        <Button>Normal Button</Button>
        <Button $primary>Primary Button</Button>
      </Container>
    </>
  )
}

export default App
