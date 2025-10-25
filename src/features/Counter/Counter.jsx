import { useState } from 'react';
import clsx from 'clsx';
import styles from './Counter.module.css';

export function Counter({ initialCount = 0, bigDiff = 5 }) {
  const [count, setCount] = useState(initialCount);

  function handleClick(diff) {
    setCount(count + diff);
  }

  // let cls = '';
  // if(count > 0){
  //   cls = 'positive';
  // } else if(count < 0) {
  //   cls = 'negative'
  // }

  // createElement('output', { className: cls }, count);
  return (
    <>
      <output
        className={clsx(styles.counter, {
          [styles.positive]: count > 0,
          [styles.negative]: count < 0,
        })}
      >
        {count}
      </output>
      <div>
        <button onClick={() => handleClick(-bigDiff)}>-{bigDiff}</button>
        <button onClick={() => handleClick(-1)}>-</button>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => handleClick(1)}>+</button>
        <button onClick={() => handleClick(bigDiff)}>+{bigDiff}</button>
      </div>
    </>
  );
}

// let state;

// function myUseState(initialValue) {
//   if (!state) {
//     state = initialValue;
//   }

//   funtcion updateState(newState) {
//     if(state !== newState) {
//       state = newState;
//       Counter();
//     }
//   }

//   return [state, updateState];
// }

// const [count, setCount] = myUseState(0);
