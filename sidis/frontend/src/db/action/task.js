import {
    SET_TASK_REQUEST,
    DELETE_TASK_REQUEST,
    FETCH_TASK_REQUEST,
    MOVE_TASK_REQUEST
}  from '../actionTypes/task';

export const setTaskRequest = data => ({
    type: SET_TASK_REQUEST,
    payload: data,
});


export const fetchTaskRequest = data => ({
    type: FETCH_TASK_REQUEST,
    payload: data,
});

export const moveTaskRequest = data => ({
    type: MOVE_TASK_REQUEST,
    payload: data,
});

export const deleteTaskRequest = data => ({
    type: DELETE_TASK_REQUEST,
    payload: data,
});
