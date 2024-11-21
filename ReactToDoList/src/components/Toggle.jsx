import  { CompleteButton } from './styles';

const ToggleButton = ({completed, onComplete}) =>{
  return (
    <CompleteButton onClick={onComplete}>
      {completed ? '完了':'未完了'}
    </CompleteButton>
  );
};


export default ToggleButton;
