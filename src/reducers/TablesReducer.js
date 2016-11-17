import {FETCH_TABLES} from '../actions/Types';


const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_TABLES:
            return { ...state, tables: action.payload}
        default:
            return state;
    }
}