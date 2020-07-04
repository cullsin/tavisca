
import {put, call, takeLatest} from 'redux-saga/effects';
import {
    save,
    list,
    remove
} from '../../com/card';

import {get_json_data} from '../../meta/helper';
import {
    SET_CARD_REQUEST,
    SET_CARD_SUCCESS,
    DELETE_CARD_REQUEST,
    DELETE_CARD_SUCCESS,
    FETCH_CARD_REQUEST,
    FETCH_CARD_SUCCESS
}
from '../../db/actionTypes/card';

import { LOADING_PROGRESS, LOADING_SUCCESS } from '../../db/actionTypes/loading';

export function* setCardSaga() {
  yield takeLatest(SET_CARD_REQUEST, workerSagaPostCard);
}

export function* fetchCardSaga() {
    yield takeLatest(FETCH_CARD_REQUEST, workerSagaFetchCard);
}

export function* deleteCardSaga() {
    yield takeLatest(DELETE_CARD_REQUEST, workerSagaDeleteCard);
}

function* workerSagaPostCard(data) {
    yield put({type: LOADING_PROGRESS });
    const response = yield call(save, data.payload);
    const payload = get_json_data(response).json;
    yield put({type: SET_CARD_SUCCESS, payload });
    yield put({type: LOADING_SUCCESS });
}

function* workerSagaFetchCard(data) {
    yield put({type: LOADING_PROGRESS });
    const response = yield call(list, data.payload);
    const payload = get_json_data(response,'list').json;
    yield put({type: FETCH_CARD_SUCCESS, payload });
    yield put({type: LOADING_SUCCESS });
}  

function* workerSagaDeleteCard(data) {
    yield put({type: LOADING_PROGRESS });
    const response = yield call(remove, data.payload);
    const payload = get_json_data(response).json;
    yield put({type: DELETE_CARD_SUCCESS, payload });
    yield put({type: LOADING_SUCCESS });
}  
