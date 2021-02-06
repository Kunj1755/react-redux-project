import { Suspense } from "react";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// The convention is to use the same as ur identifier but in camel case
// Can receive a payload passed
export const increment = () => {
    return {
        type: INCREMENT
    }
}
export const decrement = () => {
    return {
        type: DECREMENT
    }
}
export const add = (value) => {
    return {
        type: ADD,
        val: value
    }
}
export const subtract = (value) => {
    return {
        type: SUBTRACT,
        val: value
    }
}
export const saveresult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    }
}
export const storeResult = (res) => {
    // We have access to dispatch here due to redux-thunk
    return function (dispatch) {
        setTimeout(() => {
            dispatch(saveresult(res));
        }, 2000)
    }
}
export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        resultElId: id
    }
}