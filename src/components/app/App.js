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
  const tableDimentions = {
    height: 50,
    width: 50,
  };
  const assignComand = (value) => {
    setCmd(value);
  };

  const drawCanvas = (ctx) => {
    ctx.fillStyle = 'black';
    ctx.canvas.width = tableDimentions.width * 10;
    ctx.canvas.height = tableDimentions.height * 10;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };

  useEffect(() => {
    if (cmd) {
      console.log('i have changes', cmd);
    }
  }, [cmd]);

  return (
    <AppWrapper>
      <Table>
        <Canvas command={cmd} draw={drawCanvas} />
      </Table>
      <CommandCenter setCommand={assignComand} />
    </AppWrapper>
  );
};

export default App;
