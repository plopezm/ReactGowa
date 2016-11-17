import {SIGN_IN, SIGN_OUT, VALIDATE_SESSION} from '../actions/Types';
import axios from 'axios';

const INITIAL_STATE = { isAuth: false, token:'' };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case VALIDATE_SESSION:
        case SIGN_IN:
            return { ...state, isAuth: action.payload.isAuth };
        case SIGN_OUT:
            return { ...state, isAuth: action.payload.isAuth };
        default:
            return state;
    }
}