import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Page from './page'
import TaskRight from 'layout/mobile/task/right'
import Card from 'layout/mobile/card'
import Task from 'layout/mobile/task'
import List from 'layout/mobile/card/left'

class Router extends Component {
    render() {
      return (  
        <Switch>
            <React.Fragment>
              <Route exact path='/' component={Page} />
              <Route exact path='/card/' component={Card} />
              <Route exact path='/card/list' component={List} />
              <Route exact path='/card/:id/task/:task_id?' component={Task} />
              <Route exact path='/card/:id/tasks' component={TaskRight} />
            </React.Fragment>
        </Switch>
      );
    }
}

export default Router;