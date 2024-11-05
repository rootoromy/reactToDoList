import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { GlobalStyle, Button, Container, Input, InputWrap, ColoredMessage, DeleteButton, Text, TodoTr } from './components/ComponentStyles.jsx';
import ToggleButton from './components/Toggle.jsx';

function App() {

  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };


  const onClickButton = () => {
    const newTodo = {
      id: uuidv4(),
      text: todoText
    };

    console.log("newTodo:", newTodo);
    console.log("todoList:", todoList);
    setTodoList([...todoList, newTodo]);
    setTodoText("");
  };

  const onDeleteButton = (id) => {

    const newTodoList = todoList.filter((todo) => todo.id !== id);

    setTodoList(newTodoList);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>TO DO List</h1>
        <Text>タスクを書いてね</Text>
        <Text>TODOボタンをクリックしてね</Text>
        <InputWrap className="inputWrap">
          <Input type="text" value={todoText} onChange={onChangeTodoText} />
          <Button onClick={onClickButton}>TODO</Button>
        </InputWrap>
        
        <ColoredMessage $primary>
        <table><tbody>
        {todoList.map((newTodo)=>(
          <TodoTr key={newTodo.id}>
            <td>・{newTodo.text}</td>
            <td><ToggleButton /></td>
            <td><DeleteButton onClick={() => onDeleteButton(newTodo.id)}>Delete</DeleteButton></td>
          </TodoTr>
        ))}
        </tbody></table>
        </ColoredMessage>
      </Container>
    </>
  )
}

export default App
