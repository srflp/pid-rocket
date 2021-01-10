import Rocket from './Rocket';
import RocketPID from './RocketPID';
import { SimulationOptions, SimulationOutput } from './typesAndDefaults';

export default class Simulation {
  private readonly rocket = new Rocket();
  private readonly rocketPID = new RocketPID(this.options);

  constructor(private readonly options: SimulationOptions) {}

  generateData(): SimulationOutput {
    const { simTime, timeStep } = this.options;
    const data = {
      count: simTime / timeStep,
      poses: [] as number[],
      times: [] as number[],
    };
    for (let time = 0; time < simTime; time += timeStep) {
      // this is being executed simTime/timeStep times
      time = Number(time.toFixed(3));
      const thrust = this.rocketPID.calculateThrust(this.rocket.getY());
      this.rocket.updateProperties(thrust);
      // TODO end if the rocket exceeds some boundary height
      data.poses.push(this.rocket.getY());
      data.times.push(time);
    }
    return data;
  }
}
