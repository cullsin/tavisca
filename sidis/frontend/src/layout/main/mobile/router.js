import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Page from './page'

const TaskRight = React.lazy(() => import('layout/mobile/task/right')); 
const Card = React.lazy(() => import('layout/mobile/card'));
const Task = React.lazy(() => import('layout/mobile/task'));
const List = React.lazy(() => import('layout/mobile/card/left'));

class Router extends Component {
    render() {
      return (  
        <Suspense fallback={<React.Fragment />}>
        <Switch>
            <React.Fragment>
              <Route exact path='/' component={Page} />
              <Route exact path='/card/' component={Card} />
              <Route exact path='/card/list' component={List} />
              <Route exact path='/card/:id/task/:task_id?' component={Task} />
              <Route exact path='/card/:id/tasks' component={TaskRight} />
            </React.Fragment>
        </Switch>
        </Suspense>
      );
    }
}

export default Router;