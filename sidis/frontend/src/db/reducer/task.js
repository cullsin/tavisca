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
  
  from '../actionTypes/task';
  
  export default function taskReducer(state = {}, action) {
    switch (action.type) {
      case SET_TASK_REQUEST:
      case DELETE_TASK_REQUEST:
      case FETCH_TASK_REQUEST:
      case MOVE_TASK_REQUEST:
      return {
        items: {
        },
      };
  
      case SET_TASK_SUCCESS:
      return {
        setTask: action.payload || []
      }  
    
      case FETCH_TASK_SUCCESS:
      return {
          list: action.payload || []
      }  
  
      case DELETE_TASK_SUCCESS:
      return {
          delete: action.payload || []
      }  
   
      case MOVE_TASK_SUCCESS:
      return {
          move: action.payload || []
      }  
   
      default:
        return state;
    }
  }
  