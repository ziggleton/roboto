import './canvas.css';
import { useRef, useEffect } from 'react';

const Canvas = ({ cmd = null }) => {
  const canvasref = useRef(null);
  //  the canvas receives the commad from the app/commandcenter
  // the canvas executes the commands
  // the canvas redraws the robot in the new position
  // the canvas keeps record of the previous position of the robot

  /**
   * COMMANDS (convention over code)
   * PLACE x,y, Orientation
   * REPORT - reports the current location
   * MOVE - moves Robot in the orientation direction
   * LEFT - rotates the element 90deg to the left
   * RIGHT - rotates the element/robot 90deg to the right.
   */

  useEffect(() => {
    const canvas = canvasref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const animateItems = () => {
      window.requestAnimationFrame(animateItems);
    };
    animateItems();
    // robot color

    // we need to find sprites for the robot here.
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 50, 50);
  }, [cmd]);

  // const _Move = () => {}
  // const _RIGHT = () => {}
  // const _LEFT = () => {}
  // const _REPORT = () => {}

  return <canvas id='terrain' ref={canvasref}></canvas>;
};
export default Canvas;
