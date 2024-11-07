import { useState } from 'react'
import  { CompleteButton } from './styles';

const ToggleButton = () =>{
  const [open, setOpen] = useState(true)
  const toggle = () => {
    setOpen(prevState => !prevState);
  }
  return (
    <CompleteButton onClick={toggle}>
      {open? '未完了':'完了'}
    </CompleteButton>
  );
};

export default ToggleButton