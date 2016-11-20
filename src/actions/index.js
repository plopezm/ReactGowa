import axios from 'axios';
import { SIGN_IN, SIGN_OUT, VALIDATE_SESSION, FETCH_TABLES, GET_TABLE_STRUCT, GET_TABLE } from './Types';

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
                dispatch({type: SIGN_OUT});
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

    return (dispatch) => {
        request
            .then((response) => {
                const auth = {
                    isAuth: true,
                    token: ''
                };
                dispatch({type: SIGN_IN, payload: auth});
            })
            .catch(() => {
                dispatch({type: SIGN_OUT});
            });
    };
}

export function fetchTables(){
    const request = axios({
        method: 'get',
        url: `${API_URL}/rest/tables`,
        withCredentials: true
    });

    return (dispatch) => {
        request
            .then(({data}) => {
                dispatch({type: FETCH_TABLES, payload: data});
            })
            .catch(() => {
                dispatch({type: SIGN_OUT});
            });
    }
}

export function getTableStruct(table){
    const request = axios({
        method: 'get',
        url: `${API_URL}/rest/tables/struct/${table}`,
        withCredentials: true
    });

    return (dispatch) => {
        request.then(({data}) =>{
            dispatch({type: GET_TABLE_STRUCT, payload: data});
        })
            .catch((err) => {
                dispatch({type: SIGN_OUT});
            });
    }
}

export function showTable(table){
    const request = axios({
        method: 'get',
        url: `${API_URL}/rest/tables/show/${table}`,
        withCredentials: true
    });

    return (dispatch) => {
        request.then(({data}) =>{
            dispatch({type: GET_TABLE, payload: data});
        })
        .catch((err) => {
            dispatch({type: SIGN_OUT});
        });
    }
}