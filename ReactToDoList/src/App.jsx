import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  GlobalStyle,
  Button,
  Container,
  Input,
  InputWrap,
  ColoredMessage,
  Text,
} from "./components/styles.jsx";
import ConpTodoTr from "./components/ConpTodoTr.jsx";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onSubmit = () => {
    const newTodo = {
      id: uuidv4(),
      text: todoText,
      completed:false
    };

    setTodoList([...todoList, newTodo]);
    setTodoText("");
  };

  const onDeleteButton = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const onComplete = (id) => {
    const updateTodoList = todoList.map((todo) =>
      todo.id === id ? {...todo, completed: !todo.completed } : todo);
    setTodoList(updateTodoList);
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
          <Button onClick={onSubmit}>TODO</Button>
        </InputWrap>

        <ColoredMessage $primary>
          <table>
            <tbody>
              {todoList.map((newTodo) => (
                <ConpTodoTr
                  key={newTodo.id}
                  todo={newTodo}
                  onDelete={onDeleteButton}
                  onComplete={onComplete}
                />
              ))}
            </tbody>
          </table>
        </ColoredMessage>
      </Container>
    </>
  );
}

export default App;
