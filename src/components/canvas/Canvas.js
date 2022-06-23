import './canvas.css';
import Robot from '../robot/Robot';
import { getCommandObject } from '../../lib';
import { useRef, useEffect } from 'react';

const Canvas = ({ command, height, width }) => {
  const canvasref = useRef(null);
  const robot = useRef(null);
  const context = useRef(null);
  const cmd = useRef(null);
  const canvas = useRef(null);

  useEffect(() => {
    // get canvas context
    canvas.current = canvasref.current;
    context.current = canvas.current.getContext('2d');
    if (!context.current) return;
    clearCanvas();

    const animateRobot = () => {
      requestAnimationFrame(animateRobot);
      clearCanvas();
      robot.current.rDegrees = null;
      robot.current.velocity = null;
      robot.current.command = { ...cmd.current };
      robot.current._UPDATE();
    };

    if (!command) return;
    // get commandObject from the command
    cmd.current = getCommandObject(command);

    if (!cmd.current) return;
    if (!robot.current && cmd.current.trigger === 'PLACE') {
      robot.current = new Robot({ context: context.current, cmd: cmd.current });
    }
    animateRobot();
  }, [command]);

  const clearCanvas = () => {
    context.current.fillStyle = '#7DCEA0';
    context.current.fillRect(0, 0, canvas.current.width, canvas.current.height);
  };

  return <canvas id='terrain' ref={canvasref} height={height} width={width} />;
};
export default Canvas;
