import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import Left from './Left'
import Right from './Right'

class Page extends Component {

  render() {
    return (
      <React.Fragment>     
          <div className={'container-fluid outer-wrapper'}>
              <div className={'row'}>
                    <div className={'col-md-3 outer-wrapper-left'}>
                          <Left/>
                    </div>
                    <div className={'col-md-9 outer-wrapper-right'}>
                          <Right/>
                    </div>
              </div>
          </div>          
      </React.Fragment>    
    );
  }
}

export default ((withRouter)(Page));
