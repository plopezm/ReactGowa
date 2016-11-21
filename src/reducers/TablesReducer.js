import {FETCH_TABLES, GET_TABLE_STRUCT, GET_TABLE, CREATE_ROW} from '../actions/Types';


const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_TABLES:
            return { ...state, all: action.payload}
        case GET_TABLE:
            return { ...state, selected: action.payload}
        case GET_TABLE_STRUCT:
            return { ...state, selectedStruct: action.payload}
        case CREATE_ROW:
        default:
            return state;
    }
}