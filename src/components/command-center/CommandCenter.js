import styled from 'styled-components';
import { useEffect, useState } from 'react';
import CommandForm from '../form/CommandForm';

const CommandCenterWrapper = styled.section`
  height: 100%;
  width: 20%;
  min-width: 250px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #ccc;
`;

const CommandCenter = ({ setCommand }) => {
  const [cmdText, setCmdText] = useState(null);

  /**
   * The command center is responsible for receiving the command text
   * The command center varifies the command text
   * the command center sets the command and sends back to the App for proceccing
   */
  useEffect(() => {
    if (!cmdText) return;
    setCommand(cmdText);
  }, [setCommand, cmdText]);

  return (
    <CommandCenterWrapper>
      <CommandForm callback={setCmdText} />
    </CommandCenterWrapper>
  );
};

export default CommandCenter;
