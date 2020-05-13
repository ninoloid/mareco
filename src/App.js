import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import LandingPage from './views/LandingPage'
import Login from './views/Login'
import Post from './views/Post'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login type="login"/>
          </Route>
          <Route exact path="/register">
            <Login type="register"/>
          </Route>
          <Route path="/post/:id">
            <Post />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
