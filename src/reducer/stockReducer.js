import * as ActionTypes from '../actions/actionTypes';

    export const stockReducers = (state = {errMess: null, stocks:[]}, action) => {
     
        switch (action.type) {

        case ActionTypes.LIST_STOCK:
            return {...state, show:action.display, msg:action.msg, errMess: null, stocks: action.payload};
      
        case ActionTypes.ADD_STOCK:
          return {...state, show:action.display, msg:action.msg, errMess: null, stocks: action.payload};
    
        case ActionTypes.STOCK_FAILED:
          return {...state, errMess: action.payload}
       
        case ActionTypes.DEL_STOCK:
            var id = action.payload;
            return { ...state,show:action.display, stocks: state.stocks.filter((item) => item.id !== id)};
    
        default:
          return state;
      }
    };
