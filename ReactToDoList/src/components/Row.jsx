import { useState } from "react";
import { TodoTr, DeleteButton, InputText } from "./styles";
import ToggleButton from "./Toggle";



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
          id={todo.id}
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
