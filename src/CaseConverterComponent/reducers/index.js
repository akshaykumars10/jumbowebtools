import converterReducer from './converter'
import {combineReducers} from 'redux'


// combineReducer is helpful if more than one reducer is there
const rootReducer = combineReducers({
    converter : converterReducer
});

export default rootReducer;