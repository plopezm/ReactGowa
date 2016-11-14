import { SIGN_IN } from './Types';

export function authenticate(isLoggedIn){
    return{
        type: SIGN_IN,
        payload: isLoggedIn
    }
}