import {COUNTER_CHANGE} from "../constants";

export function changeCount(count){
    debugger
    return {
        type:COUNTER_CHANGE,
        payload:count
    }

}
