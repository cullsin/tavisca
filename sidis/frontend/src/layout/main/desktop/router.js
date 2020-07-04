import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Page from 'layout/main/desktop/page'
import Card from 'layout/desktop/card'
import Task from 'layout/desktop/task'

class Router extends Component {
    render() {
      return (  
        <Switch>
            <React.Fragment>
              <Route exact path='/' component={Page} />
              <Route exact path='/card/:id?' component={Card} />
              <Route exact path='/card/:id/task/:task_id?' component={Task} />
              <Route exact path='/card/:id/tasks' component={Page} />
            </React.Fragment>
        </Switch>
      );
    }
}

export default Router;