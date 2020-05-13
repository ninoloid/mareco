import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import './App.css';

import LandingPage from './views/LandingPage'
import Login from './views/Login'

function App() {
  return (
    <Provider store={store}>
      {/* <LandingPage /> */}
      <Login />
    </Provider>
  );
}

export default App;
