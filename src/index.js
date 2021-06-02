import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import App from './App';
import About from './pages/About'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <ProtectedRoute path="/profile" component={Profile} />
        <Route path='/' component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);