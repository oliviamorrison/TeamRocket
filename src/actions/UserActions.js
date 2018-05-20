import * as ActionTypes from './types';
import axios from 'axios';

export const getData = () => {
    return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
      console.log(response.data);
      dispatch({type:ActionTypes.placeHolderDataSuccess, payload: response.data})
    })
    .catch((error) => {
      console.log('err', error);
      dispatch({type:ActionTypes.placeHolderDataFailure, payload: "Something went wrong"})
    })
  }
}
