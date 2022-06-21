import './canvas.css';
import { useRef, useState, useEffect } from 'react';
// import { getCommandObject } from '../../lib';
// import Robot from '../robot/Robot';

const Canvas = ({ command, draw }) => {
  const canvasref = useRef(null);
  const [ctx, setCtx] = useState(null);
  // const [robot, setRobot] = useState(null);

  useEffect(() => {
    const canvas = canvasref.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;
    setCtx(context);
    draw(ctx);
  }, [draw, ctx]);

  console.log('cmd', command);

  return <canvas id='terrain' ref={canvasref} />;
};
export default Canvas;
