import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MediaQuery from 'react-responsive'
import Contant from './desktop/contant';
import MobileContant from './mobile/contant'

class Home extends Component { 
  render() { 
    return (
      <BrowserRouter basename='/' > 
        <React.Fragment>
        <MediaQuery minDeviceWidth={1224}>  
          < Contant />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>  
          <MobileContant/>
        </MediaQuery>  
        </React.Fragment>
      </BrowserRouter>
    );  
  }
}

export default Home;
