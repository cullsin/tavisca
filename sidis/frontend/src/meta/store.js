
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage'
import sagas from './saga';
import mainRouter from './reducer';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, mainRouter);
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(pReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);
sagaMiddleware.run(sagas);
