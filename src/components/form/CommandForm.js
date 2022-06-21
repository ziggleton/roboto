import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';

const Input = styled.input`
  display: inline-block;
  width: 100%;
  margin: 0.5rem;
  height: 32px;
  border-radius: 6px;
`;
const Button = styled.button`
  display: inline-block;
  width: 100%;
  margin: 0.5rem;
  height: 32px;
  border-radius: 6px;
  cursor: pointer;
  text-transform: uppercase;
`;

const CommandForm = ({ callback }) => {
  const formRef = useRef(null);
  const [cmdInput, setCmdInput] = useState(null);

  useEffect(() => {
    const frm = formRef.current;
    if (!frm) return;
    setCmdInput(frm.querySelector('input'));
  }, []);

  const acceptValue = (event) => {
    event.preventDefault();
    if (!cmdInput) return;
    callback(cmdInput.value.trim());
    setTimeout(() => {
      cmdInput.value = null;
      callback('STOP');
    }, 100);
  };

  return (
    <form ref={formRef} onSubmit={acceptValue}>
      <Input type='text' autoFocus={true} />
      <Button name='button'>execute command</Button>
    </form>
  );
};

export default CommandForm;
