import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {PersistGate} from 'redux-persist/lib/integration/react';
import App from 'layout/app';
import 'styles/index.scss'
import * as serviceWorker from 'serviceWorker';
import {persistor, store} from 'meta/store';
import 'meta/icon';

const wrap = (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
        <App />
    </PersistGate>    
    </Provider>
);

ReactDOM.render(wrap, document.getElementById('root'));
serviceWorker.unregister();
