import stepReducer from "./stepReducer";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    stepCounter: stepReducer,
});

export default allReducers;