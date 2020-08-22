import {createStore,combineReducers} from "redux";

import countReducer from "./reducers/countReducer";

const rootReducer = combineReducers({
    countManager:countReducer,

});

const configureStore=()=>{
    return createStore(rootReducer);
}


export default configureStore;
