import './canvas.css';
import Robot from '../robot/Robot';
import { getCommandObject } from '../../lib';
import { useRef, useEffect } from 'react';

const Canvas = ({ command, draw }) => {
  const canvasref = useRef(null);
  const robot = useRef(null);
  const context = useRef(null);
  const cmd = useRef(null);

  useEffect(() => {
    // get canvas context
    const canvas = canvasref.current;
    context.value = canvas.getContext('2d');
    // draw the canvas on the screen
    if (!context.value) return;
    draw(context.value);
    // get commandObject from the command
    if (!command) return;
    cmd.value = getCommandObject(command);
    if (!cmd.value) return;
    if (cmd.value.trigger === 'PLACE' && !robot.value) {
      robot.value = new Robot({ context: context.value, cmd: cmd.value });
    }
    if (!robot.value) return;
    robot.value.command = { ...cmd.value };
    const animateRobot = () => {
      window.requestAnimationFrame(animateRobot);
      context.value.fillStyle = 'black';
      context.value.fillRect(0, 0, canvas.width, canvas.height);
      robot.value._UPDATE();
    };

    animateRobot();
  }, [draw, command]);

  return <canvas id='terrain' ref={canvasref} />;
};
export default Canvas;
