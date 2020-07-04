
import {put, call, takeLatest} from 'redux-saga/effects';
import {
    save,
    list,
    remove,
    move
} from '../../com/task';

import {get_json_data} from '../../meta/helper';
import {
    SET_TASK_REQUEST,
    SET_TASK_SUCCESS,
    DELETE_TASK_REQUEST,
    DELETE_TASK_SUCCESS,
    FETCH_TASK_REQUEST,
    FETCH_TASK_SUCCESS,
    MOVE_TASK_REQUEST,
    MOVE_TASK_SUCCESS
}
from '../../db/actionTypes/task';

import { LOADING_PROGRESS, LOADING_SUCCESS } from '../../db/actionTypes/loading';

export function* setTaskSaga() {
  yield takeLatest(SET_TASK_REQUEST, workerSagaPostTask);
}

export function* fetchTaskSaga() {
    yield takeLatest(FETCH_TASK_REQUEST, workerSagaFetchTask);
}

export function* deleteTaskSaga() {
    yield takeLatest(DELETE_TASK_REQUEST, workerSagaDeleteTask);
}

export function* moveTaskSaga() {
    yield takeLatest(MOVE_TASK_REQUEST, workerSagaMoveTask);
}

function* workerSagaPostTask(data) {
    yield put({type: LOADING_PROGRESS });
    const response = yield call(save, data.payload);
    const payload = get_json_data(response).json;
    yield put({type: SET_TASK_SUCCESS, payload });
    yield put({type: LOADING_SUCCESS });
}

function* workerSagaFetchTask(data) {
    yield put({type: LOADING_PROGRESS });
    const response = yield call(list, data.payload);
    const payload = get_json_data(response).json;
    yield put({type: FETCH_TASK_SUCCESS, payload });
    yield put({type: LOADING_SUCCESS });
}  

function* workerSagaDeleteTask(data) {
    yield put({type: LOADING_PROGRESS });
    const response = yield call(remove, data.payload);
    const payload = get_json_data(response).json;
    yield put({type: DELETE_TASK_SUCCESS, payload });
    yield put({type: LOADING_SUCCESS });
}  

function* workerSagaMoveTask(data) {
    yield put({type: LOADING_PROGRESS });
    const response = yield call(move, data.payload);
    const payload = get_json_data(response).json;
    yield put({type: MOVE_TASK_SUCCESS, payload });
    yield put({type: LOADING_SUCCESS });
}  
