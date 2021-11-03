import React from 'react';
import styles from './App.module.css';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Friday Night Fever at Neue Fische</h1>
      <h2>Jukebox Sign-In</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Hi, call me..." />
        <input type="text" placeholder="...and my lastname" />
        <input type="submit" />
      </form>
    </main>
  );
}

export default App;
