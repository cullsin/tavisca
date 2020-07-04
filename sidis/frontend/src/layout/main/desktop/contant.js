import React, { Component } from 'react';
import Router from './router'
import Top from './top'
class Contant extends Component {
  render() {
    return (
      <React.Fragment>
          <Top/>
          <Router />
      </React.Fragment>    
    );
  }
}

export default Contant;
