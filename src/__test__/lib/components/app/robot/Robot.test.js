import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// components
import Robot from '../../../../../components/robot/Robot';

// Enzyme vconfiguration
Enzyme.configure({ adapter: new Adapter() });

let context;
let FAKECanvasElement;
let cmd;
let robot;

beforeEach(() => {
  FAKECanvasElement = {
    getContext: jest.fn(() => {
      return {
        fillStyle: null,
        fillRect: jest.fn(),
        drawImage: jest.fn(),
        getImageData: jest.fn(),
      };
    }),
  };
  context = FAKECanvasElement.getContext();
  context.canvas = {
    getBoundingClientRect: () => {
      return {
        bottom: 500,
        width: 500,
        height: 500,
        top: 0,
        x: 15,
        y: 400,
      };
    },
  };
  cmd = {
    trigger: 'PLACE',
    position: { x: 80, y: 100 },
    orientation: { deg: 270, bearing: 'WEST' },
  };
  robot = new Robot({ context, cmd });
});

describe('<Robot>', () => {
  it('should create robot and attributes', () => {
    const comRes = {
      trigger: 'PLACE',
      position: { x: 80, y: 100 },
      orientation: { deg: 270, bearing: 'WEST' },
    };

    const posRes = { x: 80, y: 100 };
    const oriRes = { deg: 270, bearing: 'WEST' };
    expect(robot.command).toMatchObject(comRes);
    expect(robot.position).toMatchObject(posRes);
    expect(robot.orientation).toMatchObject(oriRes);
  });

  it('_LEFT should change the orientation of the robot', () => {
    const res = { deg: 180, bearing: 'SOUTH' };
    robot._LEFT();
    expect(robot.orientation).not.toBe(res)
  });

  it('_RIGHT should change the orientation of the robot', () => {
    const res = { deg: 360, bearing: 'NORTH' };
    robot._RIGHT();
    expect(robot.orientation).toEqual(res)
  });
  
  it('_MOVE should change the position of the robot', () => {
    robot._MOVE();
    expect(robot.position.x).toBe(75);
    expect(robot.position.y).toBe(100);
  });

  it('_STOP should reset velocity', () => {
    robot.velocity = 50;
    robot.degrees = 50;
    robot.rDegrees = 50;
    robot._STOP();
    expect(robot.velocity).toEqual(0);
    expect(robot.degrees).toEqual(0);
    expect(robot.rDegrees).toEqual(0);
  });
});
