class Rocket {
  private _velocity: number;
  private _acceleration: number;
  private _y: number;
  private _gravity: number = -9.81;
  private _mass: number = 1;

  constructor() {
    this._acceleration = 0;
    this._velocity = 0; // V_i
    this._y = 0;
  }

  updateAcceleration(thrust: number) {
    this._acceleration = this._gravity + thrust / this._mass;
  }

  updateVelocity() {
    this._velocity += this._acceleration;
  }

  updatePosition() {
    this._y += this._velocity;
  }

  get y() {
    return this._y;
  }
}

export interface Solution {
  poses: number[];
  times: number[];
}

export default class Engine {
  private timeStep: number;
  private simTime: number;
  private maxThrust: number;
  private destination: number;

  private kP: number;
  private kI: number;
  private kD: number;
  private data: { times: number[]; poses: number[] };

  // PID
  private error: number;
  private integralError: number;
  private errorLast: number;
  private derivativeError: number;
  private output: number;
  private rocket: Rocket;

  constructor(simTime: number = 1) {
    this.timeStep = 0.002;
    this.simTime = simTime;
    this.maxThrust = 15;
    this.destination = 10;

    this.kP = 0.25;
    this.kI = 40.0;
    this.kD = 0.0008099999999999997;
    this.data = {
      poses: [],
      times: [],
    };
    this.rocket = new Rocket();

    // PID
    this.error = 0;
    this.integralError = 0;
    this.errorLast = 0;
    this.derivativeError = 0;
    this.output = 0;
  }

  calculateThrust(y: number) {
    // PID
    this.error = this.destination - y;
    this.integralError += this.error * this.timeStep;
    this.derivativeError = (this.error - this.errorLast) / this.timeStep;
    this.errorLast = this.error;
    this.output =
      this.kP * this.error + this.kI * this.integralError + this.kD * this.derivativeError;
    if (this.output >= this.maxThrust) {
      this.output = this.maxThrust;
    } else if (this.output <= 0) {
      this.output = 0;
    }
    return this.output;
  }

  // cycle
  generateData(): Solution {
    // wykona sie this.simTime/this.timeStep razy
    for (let time = 0; time < this.simTime; time += this.timeStep) {
      time = Number(time.toFixed(3));
      const thrust = this.calculateThrust(this.rocket.y);
      this.rocket.updateAcceleration(thrust);
      this.rocket.updateVelocity();
      this.rocket.updatePosition();
      // TODO kończenie jak przekroczymy jakąś wysokość graniczną
      this.data.poses.push(this.rocket.y);
      this.data.times.push(time);
    }
    return this.data;
  }
}

// const data = new Engine().generateData();
// console.log(data);
