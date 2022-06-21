import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Canvas from '../canvas/Canvas';
import './app.css';

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  position: relative;
`;

const CommandCenter = styled.section`
  height: 100%;
  width: 20%;
  min-width: 250px;
`;

const Terrain = styled.section`
  flex: 1;
`;

const App = () => {
  const [test, setTest] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    setTest('fuck you anny');
    if (test) {
      console.log(test);
    }
  }, [test, ref]);

  return (
    <AppWrapper>
      <Terrain>
        <Canvas ref={ref} />
      </Terrain>
      <CommandCenter></CommandCenter>
    </AppWrapper>
  );
};

export default App;
