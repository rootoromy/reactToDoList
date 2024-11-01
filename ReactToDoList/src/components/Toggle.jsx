import { useState } from 'react'

const ToggleButton = () =>{
  const [open, setOpen] = useState(true)
  const toggle = () => {
    setOpen(prevState => !prevState);
  }
  return (
    <button onClick={toggle}>
      {open? '未完了':'完了'}
    </button>
  );
};

export default ToggleButton