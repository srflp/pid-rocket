export default class Rocket {
  private velocity: number;
  private acceleration: number;
  private y: number;
  private gravity: number = 9.81;
  private mass: number = 1;

  constructor() {
    this.acceleration = 0;
    this.velocity = 0;
    this.y = 0;
  }

  updateProperties(thrust: number, timeStep: number) {
    this.acceleration = thrust / this.mass - this.gravity;
    this.velocity += this.acceleration * timeStep;
    this.y += this.velocity * timeStep;
  }

  getY() {
    return this.y;
  }

  getVelocity() {
    return this.velocity;
  }

  getAcceleration() {
    return this.acceleration;
  }
}
