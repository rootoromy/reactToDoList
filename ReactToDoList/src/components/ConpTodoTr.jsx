import PropTypes from 'prop-types';
import { TodoTr, DeleteButton } from "./styles";
import ToggleButton from "./Toggle";

const ConpTodoTr = ({todo, onDelete}) => {
  return (
    <TodoTr>
      <td>・{todo.text}<EditButton onClick={() => onEdit(todo.text)}>
          Edit
        </EditButton></td>
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

const onEdit = (event) => {
  //todo.textに変更を加えた情報をどうしたら取得できるのか
  //配列の既存の要素を変更して配列に戻すにはどうすればいいのか
  todoList.filter((todo)=>todo.text === text);
  setTodoList();
  const editedToDo = event.target.value;
  console.log("editedToDo:", editedToDo);
  setTodoList([...todoList, newTodo]);
  
  
};

ConpTodoTr.propTypes = {
  todo:PropTypes.shape({
    id:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired
  }).isRequired,
  onDelete:PropTypes.func.isRequired
};
export default ConpTodoTr;