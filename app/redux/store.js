import React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import authReducer,{saveSessionAction} from "./authDuck";

const rootReducer = combineReducers({
    auth:authReducer,
})

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default () => {
    // Initial load app data
    saveSessionAction()(store.dispatch)
    return store
}