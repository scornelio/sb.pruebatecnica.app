import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/users/Login';
import Home from './pages/Home';
import PrivateRoute from './components/users/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin/*" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    );
  }
}

export default App;