import { useEffect, useState } from 'react';
import Canvas from '../canvas/Canvas';
import CommandCenter from '../command-center/CommandCenter';
import AppWrapper from '../app-wrapper/AppWrapper';
import Table from '../table/Table';
import './app.css';

const App = () => {
  const [cmd, setCmd] = useState(null);
  const assignCommand = (value) => {
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
      <CommandCenter setCommand={assignCommand} />
    </AppWrapper>
  );
};

export default App;
