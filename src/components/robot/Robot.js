export default class Robot {
  constructor({ context, cmd }) {
    this.ctx = context;
    this.command = cmd;
    this.position = cmd.position;
    this.orientation = cmd.orientation;
    this.width = 20;
    this.height = 20;
    this.velocity = 1;
    this.degrees = 90;
    this.compas = [
      { bearing: 'NORTH', deg: 360 },
      { bearing: 'SOUTH', deg: 180 },
      { bearing: 'EAST', deg: 90 },
      { bearing: 'WEST', deg: 270 },
    ];
  }
  _UPDATE = () => {
    this._DRAW();
    const fn = `_${this.command.trigger}`;
    if (!fn) return;
    if (typeof this[fn] != 'function') return;
    this[fn]();
  };

  _DRAW = () => {
    this._clearRect();
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  };

  _MOVE = () => {
    this.velocity = 1;
    const bearing = this.orientation.bearing;
    if (!bearing) return;

    const cmpData = this.compas.find((i) => i.bearing === bearing);
    if (!cmpData) return;

    const cvsRects = this.ctx.canvas.getBoundingClientRect();

    const borders = {
      top: this.position.y + this.velocity + this.height / 2.5 >= cvsRects.y,
      bottom: this.position.y + this.velocity + this.height >= cvsRects.height,
      right: this.position.x + this.velocity + this.width >= cvsRects.width,
      left: this.position.x + this.velocity >= cvsRects.x,
    };

    switch (cmpData.bearing) {
      case 'NORTH':
        if (borders.top) this.position.y -= this.velocity;
        break;
      case 'SOUTH':
        if (!borders.bottom) this.position.y += this.velocity;
        break;
      case 'EAST':
        if (!borders.right) this.position.x += this.velocity;
        break;
      case 'WEST':
        if (!borders.left) this.position.x -= this.velocity;
        break;
      default:
        break;
    }
  };

  _PLACE = () => {
    this.position = this.command.position;
    this.orientation = this.command.orientation;
    return true;
  };

  _STOP = () => {
    this.velocity = 0;
    this.degrees = 0;
  };

  _LEFT = () => {
    this.degrees = 90;
    if (this.orientation.deg === 0) {
      this.orientation.deg = 360;
    }
    const degree = Math.abs(this.orientation.deg - this.degrees);
    const cmpItem = this.compas.find((i) => i.deg === this.orientation.deg);

    this.orientation.deg = degree;
    this.orientation.bearing = cmpItem.bearing;
    console.log('LEFT', this.orientation);
  };

  _RIGHT = () => {
    this.degrees = 90;
    if (this.orientation.deg === 360) {
      this.orientation.deg = 0;
    }
    const degree = Math.abs(this.orientation.deg + this.degrees);
    const cmpItem = this.compas.find((i) => i.deg === this.orientation.deg);

    this.orientation.deg = degree;
    this.orientation.bearing = cmpItem.bearing;
    console.log('RIGHT', this.orientation);
  };

  _REPORT = () => {
    alert('Voetsek');
  };

  _clearRect = () => {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  };
}
