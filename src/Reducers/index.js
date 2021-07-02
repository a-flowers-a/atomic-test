import stepReducer from "./stepReducer";
import {combineReducers} from 'redux';
import infoReducer from "./infoReducer";

const allReducers = combineReducers({
    stepCounter: stepReducer,
    phone: infoReducer
});

export default allReducers;