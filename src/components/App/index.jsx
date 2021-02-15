import React from 'react';
import Header from '../Header';
import Main from '../Main';
import styles from './app.module.css';

const App = () => (
  <div className={styles.app} data-test="dataComponent">
    <Header />
    <Main />   
  </div>
);

export default App;
