import { useEffect, useState } from 'react';
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

  const animate = () => {
    // this function helps wit smooth animation of the robot.
    window.requestAnimationFrame(animate);
    console.log('go');
  };

  useEffect(() => {
    setTest('fuck you anny');
    if (test) {
      console.log(test);
      // animate();
    }
  }, [test]);

  return (
    <AppWrapper>
      <Terrain>
        <Canvas />
      </Terrain>
      <CommandCenter></CommandCenter>
    </AppWrapper>
  );
};

export default App;
