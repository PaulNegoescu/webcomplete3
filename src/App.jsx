import { Counter } from "./features/Counter/Counter";
import { Weather } from "./features/Weather/Weather";

export function App() {
  return <>
    <Weather />
    <br />
    <Counter />
    <Counter initialCount={3} bigDiff={13} />
  </>
}

// createElement(Counter, { initialCount: 3, bigDiff: 13 });
