<h1 align="center">
  PID rocket
</h1>

_Read this in other languages: [Polski](README.pl.md)_

## About

This project is an online simulator of a thrust control system (PID Controller) for a rocket.
The controller controls thrust of the rocket.
We presume, that the rocket can move only in the Y axis.
Goal of the simulation: the rocket should reach the destination height, starting from zero.

Simulation variables: PID controller constants (kP, kI, kD), time step, simulation time, max thrust (of the engine), destination height.

Used technologies: TypeScript, Next.js

The project runs online here: [srflp.github.io/pid-rocket](https://srflp.github.io/pid-rocket/)

## Getting Started

First, go into your "projects" directory.

Clone this repo:

```shell
git clone https://github.com/srflp/pid-rocket.git
# or if you use SSH key
git clone git@github.com:srflp/pid-rocket.git
# or GH CLI
gh repo clone srflp/pid-rocket
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Credits

This project was created for the Basics of Automatics course on the 3rd semester of Computer Science at Poznan University of Technology.

Contributors:

- Filip Sauer
- Konrad Szychowiak
- Karina Szubert
- Monika Zielińska

PID Controller inspired by (source code in Python): [github.com/Jmack66/PIDtest](https://github.com/Jmack66/PIDtest)
