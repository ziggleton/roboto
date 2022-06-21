const isPlace = new RegExp(
  /^(PLACE) ([0-9]{1,2}),([0-9]{1,2}),(NORTH|SOUTH|EAST|WEST)/
);
const actionType = new RegExp(/^(LEFT|RIGHT|REPORT|MOVE)/);

const getCommandObject = (cmdString) => {
  let obj = {
    trigger: 'PLACE',
    position: {
      x: null,
      y: null,
    },
    orientation: null,
  };
  if (isPlace.test(cmdString)) {
    const primaryArr = cmdString.split(' ');
    if (primaryArr.length) {
      obj.trigger = primaryArr[0];
    }
    if (primaryArr[1].length) {
      const secondaryArr = primaryArr[1].split(',');
      obj.position.x = secondaryArr[0];
      obj.position.y = secondaryArr[1];
      switch (secondaryArr[2]) {
        case 'NORTH':
          obj.orientation = 0;
          break;
        case 'SOUTH':
          obj.orientation = 180;
          break;
        case 'EAST':
          obj.orientation = 270;
          break;
        case 'WEST':
          obj.orientation = 90;
          break;
        default:
          obj.orientation = 0;
          break;
      }
    }
  } else if (actionType.test(cmdString)) {
    delete obj.position;
    delete obj.orientation;
    obj.trigger = cmdString;
  } else {
    obj = new Error(cmdString);
  }

  return obj;
};

export { getCommandObject };
