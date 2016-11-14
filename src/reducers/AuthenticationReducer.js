import {SIGN_IN, SIGN_OUT} from '../actions/Types';

const INITIAL_STATE = { isAuth: false, token:'' };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isAuth: action.payload};
        case SIGN_OUT:
            return { ...state, isAuth: false, token: ''};
        default:
            return state;
    }
}