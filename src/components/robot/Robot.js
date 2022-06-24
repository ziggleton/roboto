export default class Robot {
  constructor({ context, cmd }) {
    this.ctx = context;
    this.command = cmd;
    this.position = cmd.position;
    this.orientation = cmd.orientation;
    this.width = 64;
    this.height = 64;
    this.velocity = 5;
    this.degrees = null;
    this.compas = [
      { deg: 360, bearing: 'NORTH' },
      { deg: 180, bearing: 'SOUTH' },
      { deg: 90, bearing: 'EAST' },
      { deg: 270, bearing: 'WEST' },
    ];
    this.isReporting = null;
    this.reporter = {
      position: this.position,
      height: 50,
      width: 180,
      text: null,
    };
  }
  _UPDATE = () => {
    const fn = `_${this.command.trigger}`;
    if (!fn) return;
    if (typeof this[fn] != 'function') return;
    this[fn]();
    this._DRAW();
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

    // reportbox
    if (this.isReporting && this.reporter.text) {
      this.ctx.fillStyle = 'black';
      this.ctx.roundRect(
        this.position.x,
        this.position.y,
        this.reporter.width,
        this.reporter.height,
        5
      );
      this.ctx.fill();
      this.ctx.fillStyle = '#ccc';
      this.ctx.fillText(
        this.reporter.text,
        this.position.x + 40,
        this.position.y + 28
      );
    }
  };

  _MOVE = () => {
    this.velocity = 5;
    const bearing = this.orientation.bearing;
    if (!bearing) return;

    const cmpData = this.compas.find((i) => i.bearing === bearing);
    if (!cmpData) return;

    const cvsRects = this.ctx.canvas.getBoundingClientRect();

    const borders = {
      top: this.position.y + this.velocity + this.height / 2 >= 0 + this.height,
      bottom:
        this.position.y + this.velocity + this.height >=
        cvsRects.bottom + this.velocity,
      right: this.position.x + this.velocity + this.width >= cvsRects.width,
      left: this.position.x + this.velocity + this.width >= 0 + this.width / 2,
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
        if (borders.left) this.position.x -= this.velocity;
        break;
      default:
        break;
    }
    this.reporter.text = `${this.position.x},${this.position.y},${this.orientation.bearing}`;
  };

  _LEFT = () => {
    this.degrees = 90;

    const bearing = this.orientation.bearing;
    if (!bearing) return;

    const cmpData = this.compas.find((i) => i.bearing === bearing);
    if (!cmpData) return;
    let tempDeg =
      cmpData.deg === 0
        ? Math.abs(360 - this.degrees)
        : Math.abs(cmpData.deg - this.degrees);
    tempDeg = tempDeg === 0 ? 360 : tempDeg;

    const newOrientation = this.compas.find((i) => i.deg === tempDeg);
    if (!newOrientation) return;

    this.orientation.deg = newOrientation.deg;
    this.orientation.bearing = newOrientation.bearing;
    this.reporter.text = `${this.position.x},${this.position.y},${this.orientation.bearing}`;
    this.command.trigger = 'STOP';
  };

  _RIGHT = () => {
    this.rDegrees = 90;
    console.log('RIGHT', this.rDegrees);

    const bearing = this.orientation.bearing;
    if (!bearing) return;

    const cmpData = this.compas.find((i) => i.bearing === bearing);

    if (!cmpData) return;
    let tempDeg =
      cmpData.deg === 0
        ? Math.abs(360 + this.rDegrees)
        : Math.abs(cmpData.deg + this.rDegrees);
    tempDeg = tempDeg === 0 ? 360 : tempDeg;

    const newOrientation = this.compas.find((i) => i.deg === tempDeg);
    if (!newOrientation) return;

    this.orientation.deg = newOrientation.deg;
    this.orientation.bearing = newOrientation.bearing;
    this.reporter.text = `${this.position.x},${this.position.y},${this.orientation.bearing}`;
    this.command.trigger = 'STOP';
  };

  _PLACE = () => {
    if (
      !(
        this.command.position.x >= 0 &&
        this.command.position.x <= this.ctx.canvas.width &&
        this.command.position.y >= 0 &&
        this.command.position.y <= this.ctx.canvas.height
      )
    )
      return;
    this.position = this.command.position;
    this.orientation = this.command.orientation;
  };

  _STOP = () => {
    this.velocity = 0;
    this.degrees = 0;
    this.rDegrees = 0;
    // this.isReporting = null;
  };

  _REPORT = () => {
    this.isReporting = true;
    setTimeout(() => {
      this.isReporting = false;
    }, 1500);
  };

  _clearRect = () => {
    this.ctx.fillStyle = '#7DCEA0';
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  };
}
