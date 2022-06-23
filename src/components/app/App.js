import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Canvas from '../canvas/Canvas';
import CommandCenter from '../command-center/CommandCenter';
import './app.css';

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  position: relative;
`;

const Table = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const [cmd, setCmd] = useState(null);
  const assignComand = (value) => {
    setCmd(value);
  };

  useEffect(() => {
    if (cmd) {
      console.log('Command Update:', cmd);
    }
  }, [cmd]);

  return (
    <AppWrapper>
      <Table>
        <Canvas command={cmd} height={500} width={500} />
      </Table>
      <CommandCenter setCommand={assignComand} />
    </AppWrapper>
  );
};

export default App;
