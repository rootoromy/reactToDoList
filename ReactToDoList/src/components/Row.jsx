import PropTypes from "prop-types";
import { useState } from "react";
import { TodoTr, DeleteButton, InputText } from "./styles";
import ToggleButton from "./Toggle";



const Row = ({ todo, onDelete, onComplete }) => {
  const [todoEdit, setTodoEdit] = useState(todo.text);

  const EditTextArea = (event) => {
    setTodoEdit(event.target.value);
  };

  //「どのTodoが完了したのか？」ということをデータとして保持したい。
  return (
    <TodoTr>
      <td>
        <InputText
          type="text"
          value={todoEdit}
          onChange={EditTextArea}
        />

      </td>
      <td>
        <ToggleButton todo={todo} onComplete={onComplete} />
      </td>
      <td>
        <DeleteButton onClick={() => onDelete(todo.id)}>Delete</DeleteButton>
      </td>
    </TodoTr>
  );
};



Row.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default Row;
