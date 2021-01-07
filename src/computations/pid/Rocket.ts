export default class Rocket {
  private velocity: number;
  private acceleration: number;
  private y: number;
  private gravity: number = -9.81;
  private mass: number = 1;

  constructor() {
    this.acceleration = 0;
    this.velocity = 0;
    this.y = -100;
  }

  updateProperties(thrust: number) {
    this.acceleration = this.gravity + thrust / this.mass;
    this.velocity += this.acceleration;
    this.y += this.velocity;
  }

  getY() {
    return this.y;
  }
}