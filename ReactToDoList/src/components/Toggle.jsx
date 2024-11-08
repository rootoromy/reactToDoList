import PropTypes from "prop-types";
import  { CompleteButton } from './styles';

const ToggleButton = ({todo, onComplete}) =>{

  return (
    <CompleteButton onClick={() => onComplete(todo.id)}>
      {todo.completed ? '完了':'未完了'}
    </CompleteButton>
  );
};


ToggleButton.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed:PropTypes.bool.isRequired
  }).isRequired,
  onComplete: PropTypes.func.isRequired
};

export default ToggleButton;
