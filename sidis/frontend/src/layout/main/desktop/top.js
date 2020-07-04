import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Top extends Component {
  render() {
    return (
      <nav className={"navbar navbar-light bg-light"}>
          <Link to={'/card'} id='create-card' className={'btn btn-success ml-auto'}> Create Card </Link>
    </nav>  
    );
  }
}

export default Top;
