import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Top extends Component {
  render() {
    return (
      <nav className={"navbar navbar-light bg-light"}>
          <Link to={'/card/list'} className={'btn btn-success ml-auto'}> 
            <FontAwesomeIcon icon={'align-justify'} />
          </Link>
      </nav>  
    );
  }
}

export default Top;
