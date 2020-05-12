import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import './App.css';

import LandingPage from './views/LandingPage'

function App() {
  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
}

export default App;
