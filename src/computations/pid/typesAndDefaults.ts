export interface SimulationOutput {
  count: number;
  poses: number[];
  times: number[];
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
  timeStep: 0.001,
  simTime: 0.1,
  maxThrust: 15,
  destination: 110,
  kP: 0.36,
  kI: 40.0,
  kD: 0.0008099999999999997,
};
