import * as CONSTANTS from './constants';
import { action, ActionType } from 'typesafe-actions';

export const appActions = {
           editQuantityProduct: (id: string, quantity: number) =>
               action(CONSTANTS.EDIT_QUANTITY_PRODUCT, { id, quantity }),

           editQuantityProductSuccess: (id: string, quantity: number) =>
               action(CONSTANTS.EDIT_QUANTITY_PRODUCT_SUCCESS, {
                   id,
                   quantity,
               }),

           editQuantityProductFail: (error: string) =>
               action(CONSTANTS.EDIT_QUANTITY_PRODUCT_FAIL, { error }),

           deleteProduct: (id: string) =>
               action(CONSTANTS.DELETE_PRODUCT, { id }),

           deleteProductSuccess: (index: number) =>
               action(CONSTANTS.DELETE_PRODUCT_SUCCESS, { index }),

           deleteProductFail: (error: string) =>
               action(CONSTANTS.DELETE_PRODUCT_FAIL, { error }),

           loadingData: (loading: boolean) =>
               action(CONSTANTS.LOADING_DATA, { loading }),

           addCart: (data: object | number, quantity: number) =>
               action(CONSTANTS.ADD_CART, { data, quantity }),

           addCartSuccess: (data: object | number, quantity: number) =>
               action(CONSTANTS.ADD_CART_SUCCESS, { data, quantity }),

           addCartFail: (error: string) =>
               action(CONSTANTS.ADD_CART_FAIL, { error }),
       };

export type AppActions = ActionType<typeof appActions>