import { useState } from 'react'
import { Button } from 'ComponentStyles.jsx';

const ToggleButton = () =>{
  const [open, setOpen] = useState(true)
  const toggle = () => {
    setOpen(prevState => !prevState);
  }
  return (
    <Button onClick={toggle}>
      {open? '未完了':'完了'}
    </Button>
  );
};

export default ToggleButton