import { useState } from 'react'
//import styled from "styled-components";
//import styled, { css } from 'styled-components'
//import './App.scss'
//import { Container,Button } from "./styles";
import { v4 as uuidv4 } from 'uuid';

import { GlobalStyle, Button, Container, Input, InputWrap, ColoredMessage } from './components/ComponentStyles';


function App() {

  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const uniqueId = uuidv4();
  console.log('A unique ID:', uniqueId);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  let newTodo = {
    id: uniqueId,
    text: todoText
  };
  const onClickButton = () => {
    todoList.push(newTodo);
    console.log("newTodo:", newTodo);
    setTodoList(todoList);
    setTodoText("");
  };

  

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>TO DO List</h1>
        <InputWrap className="inputWrap">
          <Input type="text" value={todoText} onChange={onChangeTodoText} />
          <Button onClick={onClickButton}>TODO</Button>
        </InputWrap>
        <ColoredMessage $primary><table>
        {todoList.map((newTodo)=>(<tr key={newTodo.id}>・{newTodo.text}</tr>))}
          </table></ColoredMessage>
      </Container>
    </>
  )
}

export default App
