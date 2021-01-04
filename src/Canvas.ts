class Canvas {
  set speed(value: number) {
    this._speed = value;
  }
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private width: number;
  private height: number;
  private reqID: number | undefined;
  private count = 0;
  private _speed = 1;

  constructor(canvas: HTMLCanvasElement) {
    if (!canvas) {
      throw "Canvas not found.";
    }
    this.canvas = canvas;
    const { width, height } = this.canvas.getBoundingClientRect();
    this.width = width;
    this.height = height;
    const canvasContext = this.canvas.getContext("2d");
    if (canvasContext) {
      this.ctx = canvasContext;
    } else {
      throw "2d canvas context not supported";
    }
  }

  drawContinuously(): void {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.beginPath();
    this.ctx.arc(
      this.count % this.width,
      this.count % this.width,
      10,
      0,
      Math.PI * 2
    );
    this.ctx.fillStyle = "blue";
    this.ctx.fill();
    this.ctx.closePath();
    this.count += this._speed;

    this.reqID = requestAnimationFrame(this.drawContinuously.bind(this));
  }

  stop(): void {
    if (typeof this.reqID === "number") {
      cancelAnimationFrame(this.reqID);
    }
  }
}

export default Canvas;
