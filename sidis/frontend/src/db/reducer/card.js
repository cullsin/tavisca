import {
    SET_CARD_REQUEST,
    SET_CARD_SUCCESS,
    DELETE_CARD_REQUEST,
    DELETE_CARD_SUCCESS,
    FETCH_CARD_REQUEST,
    FETCH_CARD_SUCCESS
  }
  
  from '../actionTypes/card';
  
  export default function cardReducer(state = {}, action) {
    switch (action.type) {
      case SET_CARD_REQUEST:
      case DELETE_CARD_REQUEST:
      case FETCH_CARD_REQUEST:
      return {
        items: {
        },
      };
  
      case SET_CARD_SUCCESS:
      return {
        setCard: action.payload || []
      }  
    
      case FETCH_CARD_SUCCESS:
      return {
          list: action.payload || []
      }  
  
      case DELETE_CARD_SUCCESS:
      return {
          delete: action.payload || []
      }  
   
      default:
        return state;
    }
  }
  