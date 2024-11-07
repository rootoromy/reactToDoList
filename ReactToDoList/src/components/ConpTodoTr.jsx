import PropTypes from "prop-types";
import { useState } from "react";
import { TodoTr, DeleteButton, Textarea } from "./styles";
import ToggleButton from "./Toggle";



const ConpTodoTr = ({ todo, onDelete }) => {
  const [todoEdit, setTodoEdit] = useState(todo.text);

  const EditTextArea = (event) => {
    setTodoEdit(event.target.value);
  };

  return (
    <TodoTr>
      <td>
        <Textarea
          type="text"
          value={todoEdit}
          onChange={EditTextArea}
        />
         
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



ConpTodoTr.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ConpTodoTr;
