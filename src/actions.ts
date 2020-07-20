import * as CONSTANTS from "./constants";
import { action } from "typesafe-actions";

interface checkData {
    name: string;
    image: string;
    price: number;
    discount: number;
    description: string;
    id: string;
}
export const appActions = {
    login: (user: object) => action(CONSTANTS.LOGIN, user),

    loginSuccess: (user: object) => action(CONSTANTS.LOGIN_SUCCESS, user),

    loginFail: () => action(CONSTANTS.LOGIN_FAIL),

    logout: () => action(CONSTANTS.LOGOUT),

    logoutSuccess: () => action(CONSTANTS.LOGOUT_SUCCESS),

    addCart: (data: checkData, quantity: number) =>
        action(CONSTANTS.ADD_CART, { data, quantity }),

    addCartSuccess: (data: checkData | number, quantity: number) =>
        action(CONSTANTS.ADD_CART_SUCCESS, { data, quantity }),

    addCartFail: (error: string) => action(CONSTANTS.ADD_CART_FAIL, { error }),

    editQuantityProduct: (id: string, quantity: number) =>
        action(CONSTANTS.EDIT_QUANTITY_PRODUCT, { id, quantity }),

    editQuantityProductSuccess: (id: string, quantity: number) =>
        action(CONSTANTS.EDIT_QUANTITY_PRODUCT_SUCCESS, {
            id,
            quantity,
        }),

    editQuantityProductFail: (error: string) =>
        action(CONSTANTS.EDIT_QUANTITY_PRODUCT_FAIL, { error }),

    deleteProduct: (id: string) => action(CONSTANTS.DELETE_PRODUCT, { id }),

    deleteProductSuccess: (index: number) =>
        action(CONSTANTS.DELETE_PRODUCT_SUCCESS, { index }),

    deleteProductFail: (error: string) =>
        action(CONSTANTS.DELETE_PRODUCT_FAIL, { error }),

    getDataProduct: () => action(CONSTANTS.GET_DATA_PRODUCT),

    getDataProductSuccess: (data: checkData) =>
        action(CONSTANTS.GET_DATA_PRODUCT_SUCCESS, { data }),
    getDataProductFail: () => action(CONSTANTS.GET_DATA_PRODUCT_FAIL),

    showLoading: () => action(CONSTANTS.SHOW_LOADING),

    hideLoading: () => action(CONSTANTS.HIDE_LOADING),
};
