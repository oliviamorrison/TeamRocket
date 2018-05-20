import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import jsonMockData from './jsonPlaceHolder'

function rootReducer() {

    return combineReducers({
        routing: routerReducer,
        jsonMockData: jsonMockData
    })

}

export default rootReducer;
