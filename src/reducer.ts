import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as CONSTANTS from './constants';

interface checkListProduct {
    id: string;
    numberOfReviews: number;
    rate: number;
    qty: number;
    name: string;
    description: string;
    price: number;
    discount: number;
    image: string;
    quantity: number;
}
const checkDataCart: checkListProduct[] = [];
const persistCartConfig = {
    key: 'cart',
    storage,
    whitelist: ['dataCart', 'token'],
};

const initialState = {
    dataCart: checkDataCart,
    loading: false,
    token: null,
};

const rootReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case CONSTANTS.LOGIN_SUCCESS: {
            
            const token = action.payload;
            return {
                ...state,
                token: token,
            };
        }
        case CONSTANTS.LOGIN_FAIL: {
            return {
                ...state,
                token: null,
            };
        }
        case CONSTANTS.LOGOUT_SUCCESS: {
            return {
                ...state,
                token: null,
            };
        }

        case CONSTANTS.EDIT_QUANTITY_PRODUCT_SUCCESS: {
            console.log(action);

            const { id, quantity } = action.payload;
            const newDataCart = [...state.dataCart];
            newDataCart.map((item: { id: string; quantity: number }) => {
                if (item.id === id) {
                    item.quantity = quantity;
                }
                return item;
            });
            return {
                ...state,
                dataCart: newDataCart,
            };
        }
        case CONSTANTS.EDIT_QUANTITY_PRODUCT_FAIL: {
            return {
                ...state,
            };
        }
        case CONSTANTS.DELETE_PRODUCT_SUCCESS: {
            const { index } = action.payload;
            const newDataCart = [...state.dataCart];
            newDataCart.splice(index, 1);
            return {
                ...state,
                dataCart: newDataCart,
            };
        }
        case CONSTANTS.DELETE_PRODUCT_FAIL: {
            return {
                ...state,
            };
        }
        case CONSTANTS.ADD_CART_SUCCESS: {
            const newDataCart: checkListProduct[] = [...state.dataCart];
            const data: any = action.payload.data;
            const quantity: number = action.payload.quantity;
            // Trường hợp mặt hàng đã có trong giỏ => sửa quantity
            if (typeof data === 'number') {
                newDataCart[data].quantity += quantity;
            }
            // Trường hợp mặt hàng chưa có trong giỏ => thêm mới
            else {
                data.quantity = quantity;
                newDataCart.push(data);
            }
            return {
                ...state,
                dataCart: newDataCart,
            };
        }
        case CONSTANTS.ADD_CART_FAIL: {
            return {
                ...state,
            };
        }
        case CONSTANTS.SHOW_LOADING: {
            return {
                ...state,
                loading: true,
            };
        }
        case CONSTANTS.HIDE_LOADING: {
            return {
                ...state,
                loading: false,
            };
        }
        default:
            return state;
    }
};

export default persistReducer(persistCartConfig, rootReducers);
