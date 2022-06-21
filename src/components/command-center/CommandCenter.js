import styled from 'styled-components';
import { useEffect, useState } from 'react';

const CommandCenterWrapper = styled.section`
  height: 100%;
  width: 20%;
  min-width: 250px;
`;

const CommandCenter = ({ callback }) => {
  const [cmdText, setCmdText] = useState(null);

  /**
   * The command center is responsible for receiving the command text
   * The command center varifies the command text
   * the command center sets the command and sends back to the App for proceccing
   */
  useEffect(() => {
    setCmdText('PLACE 10,10,hello');
    if (cmdText) {
      callback(cmdText);
    }
  }, [callback, cmdText]);

  return <CommandCenterWrapper />;
};

export default CommandCenter;
