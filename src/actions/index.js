import axios from 'axios';
import { SIGN_IN, SIGN_OUT, VALIDATE_SESSION, FETCH_TABLES } from './Types';

const API_URL = "http://localhost:8000/gowa/api";

export function validate(){
    const request = axios({
        method: 'get',
        url: `${API_URL}/validate`,
        withCredentials: true
    });

    return (dispatch) => {
        request
            .then(
            (response) => {
                const auth = {
                    isAuth: true,
                    token: ''
                };
                dispatch({type: VALIDATE_SESSION, payload: auth});
            })
            .catch((err) => {
                const auth = {
                    isAuth: false,
                    token: ''
                };
                dispatch({type: VALIDATE_SESSION, payload: auth});
            });
    }
}


export function authenticate(user, passwd){
    const request = axios({
        method: 'get',
        url: `${API_URL}/login`,
        auth: {
            username: user,
            password: passwd
        },
        withCredentials: true
    });

    return (dispath) => {
        request
            .then((response) => {
                const auth = {
                    isAuth: true,
                    token: ''
                };
                dispath({type: SIGN_IN, payload: auth});
            })
            .catch(() => {
                const auth = {
                    isAuth: false,
                    token: ''
                }
                dispath({type: SIGN_IN, payload: auth});
            });
    };
}

export function fetchTables(){
    const request = axios({
        method: 'get',
        url: `${API_URL}/rest/tables`
    });

    return (dispath) => {
        request
            .then(({data}) => {
                dispath({type: FETCH_TABLES, payload: data})
            })
            .catch();
    }




}