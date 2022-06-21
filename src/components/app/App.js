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

const Terrain = styled.section`
  flex: 1;
`;

const App = () => {
  const [cmd, setCmd] = useState(null);
  const assignComand = (value) => {
    setCmd(value);
  };

  useEffect(() => {
    if (cmd) {
      console.log(cmd);
    }
  }, [cmd]);

  return (
    <AppWrapper>
      <Terrain>
        <Canvas cmd={cmd} />
      </Terrain>
      <CommandCenter callback={assignComand} />
    </AppWrapper>
  );
};

export default App;
