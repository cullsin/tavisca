import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Page from 'layout/main/desktop/page'

const Card = React.lazy(() => import('layout/desktop/card'));
const Task = React.lazy(() => import('layout/desktop/task'));

class Router extends Component {
    render() {
      return (
        <Suspense fallback={<React.Fragment />}>  
        <Switch>
            <React.Fragment>
              <Route exact path='/' component={Page} />
              <Route exact path='/card/:id?' component={Card} />
              <Route exact path='/card/:id/task/:task_id?' component={Task} />
              <Route exact path='/card/:id/tasks' component={Page} />
            </React.Fragment>
        </Switch>
        </Suspense>
      );
    }
}

export default Router;