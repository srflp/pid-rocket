import Rocket from './Rocket';
import RocketPID from './RocketPID';
import { SimulationOptions } from './typesAndDefaults';

export default class Simulation {
  private readonly options: SimulationOptions;
  private rocket: Rocket;
  private rocketPID: RocketPID;

  constructor(options: SimulationOptions) {
    this.options = options;
    this.rocket = new Rocket();
    this.rocketPID = new RocketPID(options);
  }

  generateData() {
    const { simTime, timeStep } = this.options;
    const data = {
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
