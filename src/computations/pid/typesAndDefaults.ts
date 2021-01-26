export interface SimulationOutput {
  count: number;
  time: number[];
  height: number[];
  velocity: number[];
  acceleration: number[];
  thrust: number[];
}

export interface SimulationOptions {
  timeStep: number;
  simTime: number;
  maxThrust: number;
  destination: number;
  kP: number;
  kI: number;
  kD: number;
}

export const defaultOptions = {
  timeStep: 1,
  simTime: 100,
  maxThrust: 15,
  destination: 110,
  kP: 0.197,
  kI: 0.017,
  kD: 0.63,
};

// original ones
// export const defaultOptions = {
//   timeStep: 0.001,
//   simTime: 0.1,
//   maxThrust: 15,
//   destination: 110,
//   kP: 0.36,
//   kI: 40.0,
//   kD: 0.0008099999999999997,
// };
