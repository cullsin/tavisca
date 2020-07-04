import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Left from './left'

class Page extends Component {

  render() {
    return (
      <React.Fragment>     
          <div className={'container-fluid outer-wrapper'}>
              <div className={'row'}>
                    <div className={'col-sm-12 outer-wrapper-right'}>
                          <Left/>
                    </div>
              </div>
          </div>          
      </React.Fragment>    
    );
  }
}

export default ((withRouter)(Page));
