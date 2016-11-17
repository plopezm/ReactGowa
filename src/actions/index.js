import { SIGN_IN } from './Types';

export function authenticate(isLoggedIn = false){
    return{
        type: SIGN_IN,
        payload: isLoggedIn
    }
}