import Rocket from './Rocket';
import RocketPID from './RocketPID';
import { SimulationOptions, SimulationOutput } from './typesAndDefaults';

export default class Simulation {
  private readonly rocket = new Rocket();
  private readonly rocketPID = new RocketPID(this.options);

  constructor(private readonly options: SimulationOptions) {}

  generateData(): SimulationOutput {
    const { simTime, timeStep } = this.options;
    const data: SimulationOutput = {
      count: Math.floor(simTime / timeStep) + 1,
      time: [],
      height: [],
      velocity: [],
      acceleration: [],
      thrust: [],
    };
    let currentTime = 0;

    // add initial data point
    data.time.push(currentTime);
    data.height.push(this.rocket.getY());
    data.velocity.push(this.rocket.getVelocity());
    data.acceleration.push(this.rocket.getAcceleration());
    data.thrust.push(0);

    // generate all data points
    for (let i = 1; i < data.count; i += 1) {
      currentTime += timeStep;
      // oblicza siłę ciągu co krok czasu
      const thrust = this.rocketPID.calculateThrust(this.rocket.getY());
      // aktualizuje dane rakiety na podstawie siły ciągu (wysokość, prędkość, przyśpieszenie)
      this.rocket.updateProperties(thrust, timeStep);

      data.time.push(currentTime);
      data.height.push(this.rocket.getY());
      data.velocity.push(this.rocket.getVelocity());
      data.acceleration.push(this.rocket.getAcceleration());
      data.thrust.push(thrust);
    }
    return data;
  }
}
