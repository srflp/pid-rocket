import { SimulationOptions } from './typesAndDefaults';

export default class RocketPID {
  private integralError = 0;
  private errorLast = 0;
  private readonly options: SimulationOptions;

  constructor(options: SimulationOptions) {
    this.options = options;
  }

  calculateThrust(y: number) {
    const { timeStep, destination, maxThrust, kP, kI, kD } = this.options;

    // uchyb regulacji/sterowania
    const error = destination - y;

    // człon całkujący
    this.integralError += error * timeStep;

    // człon różniczkujący
    const derivativeError = (error - this.errorLast) / timeStep;
    this.errorLast = error;

    let thrust = kP * error + kI * this.integralError + kD * derivativeError;

    // ograniczanie siły ciągu
    if (thrust >= maxThrust) {
      thrust = maxThrust;
    } else if (thrust <= 0) {
      thrust = 0;
    }

    return thrust;
  }
}
