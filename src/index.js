import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client' 
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import App from './App';
import About from './pages/About'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute'

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
  <Router>
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <ProtectedRoute path="/profile" component={Profile} />
      <Route path='/' component={App} />
    </Switch>
  </Router>
)
