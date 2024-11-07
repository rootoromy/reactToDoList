import PropTypes from "prop-types";
import { useState } from "react";
import { TodoTr, DeleteButton } from "./styles";
import ToggleButton from "./Toggle";



const ConpTodoTr = ({ todo, onDelete }) => {
  const [todoEdit, setTodoEdit] = useState(todo.text);
  
  return (
    <TodoTr>
      <td>
        <EditTextArea
          type="text"
          value={todoEdit}
          onChange={(event) => setTodoEdit(event.target.value)}
        >
          ・{todo.text}
        </EditTextArea>
      </td>
      <td>
        <ToggleButton />
      </td>
      <td>
        <DeleteButton onClick={() => onDelete(todo.id)}>Delete</DeleteButton>
      </td>
    </TodoTr>
  );
};

const EditTextArea = (event) => {
  //todo.textに変更を加えた情報をどうしたら取得できるのか
  //配列の既存の要素を変更して配列に戻すにはどうすればいいのか

  const editedToDo = event.target.value;
  console.log("editedToDo:", editedToDo);
};

ConpTodoTr.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ConpTodoTr;
