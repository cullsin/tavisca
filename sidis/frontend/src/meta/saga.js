import {fork, all} from 'redux-saga/effects';

import {
  setCardSaga,
  fetchCardSaga,
  deleteCardSaga
} from '../db/saga/card'

import {
  setTaskSaga,
  fetchTaskSaga,
  deleteTaskSaga,
  moveTaskSaga
} from '../db/saga/task'

const sagas = [
  setCardSaga,
  fetchCardSaga,
  deleteCardSaga,
  setTaskSaga,
  fetchTaskSaga,
  deleteTaskSaga,
  moveTaskSaga
];

function* globalSagas() {
  const forks = sagas.map(saga => fork(saga));
  yield all([...forks]);
}

export default globalSagas;
