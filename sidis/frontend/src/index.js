import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {PersistGate} from 'redux-persist/lib/integration/react';
import 'styles/index.scss'
import * as serviceWorker from 'serviceWorker';
import {persistor, store} from 'meta/store';
import 'meta/icon';

const App = lazy(() => import('layout/app'));
lazy(() => import('styles/index.scss'));

const wrap = (
    <Suspense fallback={<h1> Task Runner is loading </h1>}>
        <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>    
        </Provider>
    </Suspense>
);

ReactDOM.render(wrap, document.getElementById('root'));
serviceWorker.register();
