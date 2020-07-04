import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
    <div className='card mt-3'>
        <div className='card-body'>
            <Link to={`/card/${this.props.cardId}/task/`} id='create-task' className={'btn btn-success ml-auto'}> Create Task </Link>
        </div>
    </div>          
    );
  }
}

export default Menu;
