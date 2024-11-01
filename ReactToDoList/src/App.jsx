import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { GlobalStyle, Button, Container, Input, InputWrap, ColoredMessage, DeleteButton, Text } from './components/ComponentStyles.jsx';
import ToggleButton from './components/Toggle.jsx';

function App() {

  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const uniqueId = uuidv4();

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

  const onDeleteButton = () => {
    console.log('onDeleteButton押されました！！');
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
        
        <ColoredMessage $primary><table>
        {todoList.map((newTodo)=>(<tr key={newTodo.id}>・{newTodo.text}<ToggleButton /><DeleteButton onClick={onDeleteButton}>Delete</DeleteButton></tr>))}
          </table></ColoredMessage>
      </Container>
    </>
  )
}

export default App
