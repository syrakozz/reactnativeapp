import {COUNTER_CHANGE,RESET_COUNT} from "../constants";

const initialState = {
    count : 0,
    status : 4,
    name :"nasim "
}


const countReducer = (state = initialState,action)=>{


    switch (action.type) {

        case  COUNTER_CHANGE:
            debugger
            return {
                ...state,
                count:action.payload
            }


        case  RESET_COUNT:

            return {
                ...state,
                count:0
            }
        default:
            return state;

    }
}

export default countReducer;
