import {
    SET_CARD_REQUEST,
    DELETE_CARD_REQUEST,
    FETCH_CARD_REQUEST
}  from '../actionTypes/card';

export const setCardRequest = data => ({
    type: SET_CARD_REQUEST,
    payload: data,
});


export const fetchCardRequest = data => ({
    type: FETCH_CARD_REQUEST,
    payload: data,
});

export const deleteCardRequest = data => ({
    type: DELETE_CARD_REQUEST,
    payload: data,
});

