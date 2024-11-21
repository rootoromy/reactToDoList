import { useState } from "react";
import { TodoTr, DeleteButton, InputText } from "./styles";
import ToggleButton from "./Toggle";
import { v4 as uuidv4 } from "uuid";



const Row = ({ todo, onDelete, onComplete, onEdit }) => {
  const [todoEdit, setTodoEdit] = useState(todo.text);

  const EditTextArea = (event) => {
    const updatedText = event.target.value;
    setTodoEdit(updatedText);
    onEdit(todo.id, updatedText);
  };

  //「どのTodoが完了したのか？」ということをデータとして保持したい。
  return (
    <TodoTr>
      <td>
        <InputText
          type="text"
          value={todoEdit}
          onChange={EditTextArea}
          id={uuidv4()}
        />
      </td>
      <td>
        <ToggleButton
          completed={todo.completed}
          onComplete={onComplete}
          onEdit={onEdit}
        />
      </td>
      <td>
        <DeleteButton onClick={() => onDelete(todo.id)}>Delete</DeleteButton>
      </td>
    </TodoTr>
  );
};


export default Row;
