import React, { Component } from 'react';
import {NotificationContainer} from 'react-notifications';
import Home from '../layout/main/home';

class App extends Component {

  render() { 
    return (
      <React.Fragment>
      <NotificationContainer />
        <Home />
      </React.Fragment>
    );  
  }
}

export default App;
