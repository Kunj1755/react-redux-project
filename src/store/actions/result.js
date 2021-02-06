import * as actionsTypes from './actionTypes';

export const saveresult = (res) => {
    return {
        type: actionsTypes.STORE_RESULT,
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
        type: actionsTypes.DELETE_RESULT,
        resultElId: id
    }
}