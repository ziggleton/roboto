const isPlace = new RegExp(
  /^(PLACE) ([0-9]{1,3}),([0-9]{1,3}),(NORTH|SOUTH|EAST|WEST)/
);
const actionType = new RegExp(/^(LEFT|RIGHT|REPORT|MOVE|STOP)/);

const getCommandObject = (cmdString) => {
  let obj = {
    trigger: null,
    position: {
      x: null,
      y: null,
    },
    orientation: {
      deg: null,
      bearing: null,
    },
  };
  if (isPlace.test(cmdString)) {
    const primaryArr = cmdString.split(' ');

    if (primaryArr.length) {
      obj.trigger = primaryArr[0];
    }

    if (primaryArr[1].length) {
      const secondaryArr = primaryArr[1].split(',');
      obj.position.x = parseInt(secondaryArr[0]);
      obj.position.y = parseInt(secondaryArr[1]);
      switch (secondaryArr[2]) {
        case 'NORTH':
          obj.orientation.deg = 360;
          obj.orientation.bearing = secondaryArr[2];
          break;
        case 'SOUTH':
          obj.orientation.deg = 180;
          obj.orientation.bearing = secondaryArr[2];
          break;
        case 'EAST':
          obj.orientation.deg = 90;
          obj.orientation.bearing = secondaryArr[2];
          break;
        case 'WEST':
          obj.orientation.deg = 270;
          obj.orientation.bearing = secondaryArr[2];
          break;
        default:
          break;
      }
    }
  } else if (actionType.test(cmdString)) {
    obj.trigger = cmdString;
    delete obj.position;
    delete obj.orientation;
  } else {
    obj = null;
  }
  return obj;
};

export { getCommandObject };
