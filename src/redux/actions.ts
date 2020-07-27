import * as CONSTANTS from "./constants";
import { createAction, createAsyncAction } from "typesafe-actions";

interface checkData {
    name: string;
    image: string;
    price: number;
    discount: number;
    description: string;
    id: string;
}

export const appActions = {
    login: createAsyncAction(
        CONSTANTS.LOGIN,
        CONSTANTS.LOGIN_SUCCESS,
        CONSTANTS.LOGIN_FAIL
    )<{ email: string; password: string }, { token: string }, undefined>(),

    logout: createAsyncAction(
        CONSTANTS.LOGOUT,
        CONSTANTS.LOGOUT_SUCCESS,
        CONSTANTS.LOGOUT_FAIL
    )<undefined, undefined, undefined>(),

    addCart: createAsyncAction(
        CONSTANTS.ADD_CART,
        CONSTANTS.ADD_CART_SUCCESS,
        CONSTANTS.ADD_CART_FAIL
    )<
        { data: checkData; quantity: number },
        {
            data?: checkData;
            checkIndexProduct?: number;
            quantity: number;
        },
        undefined
    >(),

    uploadProduct: createAsyncAction(
        CONSTANTS.UPLOAD_PRODUCT,
        CONSTANTS.UPLOAD_PRODUCT_SUCCESS,
        CONSTANTS.UPLOAD_PRODUCT_FAIL
    )<
        { data: checkData },
        {
            data: checkData;
        },
        undefined
    >(),

    editQuantityProduct: createAsyncAction(
        CONSTANTS.EDIT_QUANTITY_PRODUCT,
        CONSTANTS.EDIT_QUANTITY_PRODUCT_SUCCESS,
        CONSTANTS.EDIT_QUANTITY_PRODUCT_FAIL
    )<
        { id: string; quantity: number },
        { id: string; quantity: number },
        undefined
    >(),

    deleteProduct: createAsyncAction(
        CONSTANTS.DELETE_PRODUCT,
        CONSTANTS.DELETE_PRODUCT_SUCCESS,
        CONSTANTS.DELETE_PRODUCT_FAIL
    )<string, number, undefined>(),

    getDataProduct: createAsyncAction(
        CONSTANTS.GET_DATA_PRODUCT,
        CONSTANTS.GET_DATA_PRODUCT_SUCCESS,
        CONSTANTS.GET_DATA_PRODUCT_FAIL
    )<undefined, checkData[], undefined>(),

    showLoading: createAction(CONSTANTS.SHOW_LOADING)(),
    hideLoading: createAction(CONSTANTS.HIDE_LOADING)(),

    showModal: createAction(CONSTANTS.SHOW_MODAL_ADD)(),
    hideModal: createAction(CONSTANTS.HIDE_MODAL_ADD)(),
};
