<h1 align="center">
  PID rocket
</h1>

_Read this in other languages: [English](README.md)_

## O projekcie

Ten projekt to symulator systemu kontroli siły ciągu rakiety.
W symulacji wielkością sterowaną przez regulator PID jest siła ciągu rakiety.
Zakładamy, że rakieta może poruszać się jedynie w osi pionowej.
Cel symulacji: rakieta powinna wznieść się na żądaną wysokość, startując z wysokości 0.

Zmienne symulacji: stałe kontrolera PID (kP, kI, kD), krok czasu, czas symulacji, maksymalna siła ciągu (silnika), wysokość docelowa.

Użyte technologie: TypeScript, Next.js

Uruchomiony projekt znajduje się pod adresem: [srflp.github.io/pid-rocket](https://srflp.github.io/pid-rocket/)

## Lokalne uruchamianie projektu

Na początku przejdź do katalogu ze swoimi projektami.

Sklonuj to repo:

```shell
git clone https://github.com/srflp/pid-rocket.git
# lub jeśli używasz klucza SSH
git clone git@github.com:srflp/pid-rocket.git
# lub GH CLI
gh repo clone srflp/pid-rocket
```

Uruchom development server:

```bash
yarn dev
```

Od tego momentu, lokalnie uruchomiona kopia strony powinna znajdować się pod adresem [http://localhost:3000](http://localhost:3000).

## Autorzy

Ten projekt został stworzony na kurs Podstaw Automatyki 3. semestru Informatyki na Politechnice Poznańskiej.

Twórcy projektu:

- Filip Sauer
- Konrad Szychowiak
- Karina Szubert
- Monika Zielińska

Inspiracja dla naszego silnika PID (kod źródłowy w Pythonie): [github.com/Jmack66/PIDtest](https://github.com/Jmack66/PIDtest)
