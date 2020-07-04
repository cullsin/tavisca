import React, { Component } from 'react';
import Home from 'components/desktop/task/form';

class Task extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className='container-fluid'>  
          <div className='row justify-content-center'>
            <div className='col-md-6 top-gap'>
                    <Home />
            </div>
          </div>  
        </div>
      </React.Fragment>    
    );
  }
} 

export default Task;
