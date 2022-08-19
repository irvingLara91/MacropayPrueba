import React from "react";
import {getDataAsyncStorage, removeDataAsyncStorage, setDataAsyncStorage} from "../utils/utils";
import axios from "axios";
import JWT from 'expo-jwt';

const initialData = {
    loggedIn: false,
    fetching: false,
    user: null,
    error_msg: null
}

//TYPE
const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'
const LOG_OUT = 'LOG_OUT'


//REDUCER
const authReducer = (state = initialData, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, fetching: true, error_msg: ''}
        case LOGIN_SUCCESS:
            let newState = {...state, user: action.payload, loggedIn: true, fetching: false, error_msg: null}
            return newState
        case LOG_OUT:
            return {...state, fetching: false, loggedIn: false, error: action.payload}
        case LOGIN_ERROR:
            return {...state, error_msg: action.payload, fetching: false}
        default:
            return state
    }
}
export default authReducer;

//Función action para recuperar la sesión
export let saveSessionAction = () => async dispatch => {
    try {
        let storage = await getDataAsyncStorage('user');
        if (storage) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: storage
            })
        }
    } catch (error) {
        // Error saving data
    }
}

//Se guarda la información del usuario en el AsyncStorage
export let saveStore = async (storage) => {
    try {
        await setDataAsyncStorage(
            'user',
            storage
        );
    } catch (error) {
        // Error saving data
    }
}

//Función action para cerrar sesión
export let logOutAction = () => {
    return async (dispatch, getState) => {
        try {
            //const response = await axios.post(baseURL+"/rest-auth/logout/");
            dispatch({type: LOG_OUT, payload: {}})
            await clearUser();
        } catch (err) {
            await clearUser();
            dispatch({type: LOGIN_ERROR, payload: err})
        }
    };
}

//Se borra el usuario del AsyncStorage
export let clearUser = async () => {
    try {
        await removeDataAsyncStorage('user');
    } catch (error) {
        // Error saving data
    }
}




/***Función action para recuperar al usuario del AsyncStorage***/
export let loginAction = (params) => async dispatch => {
    dispatch({type: LOGIN});
    try {
      let response = await  axios.post("https://www.testandroid.macropay.com.mx",params);
      if (response.data.success){
        let decode =   JWT.decode(response.data.token, "ejercicio1");
        let data ={
            token:response.data.token,
            ...decode
        }
        console.log(response.data.token)
          dispatch({type: LOGIN_SUCCESS,payload:data});
          await saveStore(data)

      }

    } catch (error) {
        console.log(error);
        dispatch({type: LOGIN_ERROR, payload: {}})
    }
};

