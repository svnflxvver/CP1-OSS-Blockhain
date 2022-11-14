import React, { useState } from 'react';

import styles from './styles.scoped.css';

export default function Main() {
  const [counter, setCounter] = useState(0);

  const onClick = () => {
    setCounter(prevCount => prevCount + 1);
  };

  return (
    <main className={styles.root}>
      <div>
        <h1>Hello World {counter}</h1>
        <button onClick={onClick}>next</button>
      </div>
    </main>
  );
}
