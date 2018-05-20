import * as ActionTypes from '../actions/types';

var INITIAL_STATE = {
  data: [],
  error: undefined
}


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case ActionTypes.placeHolderDataSuccess:
    //  console.log(action.payload);
      return {data:  action.payload }

    case ActionTypes.placeHolderDataFailure:
      return {data: {}, error: 'Something went wrong'}

    default:
      return state
  }
}
