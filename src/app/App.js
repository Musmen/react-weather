import './scss/styles.scss';

import React from 'react';

import Header from './components/header/Header';
import ControlBlock from './containers/control-block/ControlBlock';

function App() {
  return (
    <>
      <ControlBlock />
      <Header />
    </>
  );
}

export default App;
