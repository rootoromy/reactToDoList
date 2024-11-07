import PropTypes from 'prop-types';
import { TodoTr, DeleteButton } from "./styles";
import ToggleButton from "./Toggle";

const ConpTodoTr = ({todo, onDelete}) => {
  return (
    <TodoTr>
      <td>・{todo.text}</td>
      <td>
        <ToggleButton />
      </td>
      <td>
        <DeleteButton onClick={() => onDelete(todo.id)}>
          Delete
        </DeleteButton>
      </td>
    </TodoTr>
  );
};

ConpTodoTr.propTypes = {
  todo:PropTypes.shape({
    id:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired
  }).isRequired,
  onDelete:PropTypes.func.isRequired
};
export default ConpTodoTr;