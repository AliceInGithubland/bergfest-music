import React from 'react';
import styles from './App.module.css';
import Title from './Components/Title/Title';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <Title />
      <h2 className={styles.h2}>Entry</h2>
      <div className={styles.card} />
      <form className={styles.form}>
        <input type="text" placeholder="Hi, call me..." />
        <input type="text" placeholder="...and my lastname" />
        <input type="submit" />
      </form>
    </main>
  );
}

export default App;
