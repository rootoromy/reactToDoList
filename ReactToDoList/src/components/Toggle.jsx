import  { CompleteButton } from './styles';

const ToggleButton = ({todo, onComplete}) =>{

  return (
    <CompleteButton onClick={() => onComplete(todo.id)}>
      {todo.completed ? '完了':'未完了'}
    </CompleteButton>
  );
};


export default ToggleButton;
