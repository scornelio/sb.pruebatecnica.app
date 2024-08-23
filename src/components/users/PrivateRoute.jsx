import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const token = localStorage.getItem('token');
    return token ? this.props.children : <Navigate to="/" />;
  }
}

export default PrivateRoute;