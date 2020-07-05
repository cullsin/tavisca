import React, { Component, lazy, Suspense } from 'react';
const Home = lazy(() => import('layout/main/home'));

class App extends Component {
  render() { 
    return (
      <Suspense fallback={<h1> Task Runner is loading </h1>}>
      <React.Fragment>
        <Home />
      </React.Fragment>
      </Suspense>
    );  
  }
}

export default App;
