import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createReducer } from "typesafe-actions";
import { appActions } from "./actions";

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
const listProduct: checkListProduct[] = [];

const persistCartConfig = {
    key: "cart",
    storage,
    whitelist: ["dataCart", "token", "dataProduct"],
};

const token = createReducer(null)
    .handleAction(
        appActions.login.success,
        (state: string, action: { payload: string }) => action.payload
    )
    .handleAction(appActions.login.failure, (state: string) => null)
    .handleAction(appActions.logout.success, (state: string) => null);

const dataCart = createReducer(listProduct)
    .handleAction(
        appActions.addCart.success,
        (
            state: checkListProduct[],
            action: {
                payload: {
                    quantity: number;
                    checkIndexProduct: number;
                    data: checkListProduct[];
                };
            }
        ) => {
            const newDataCart: any = [...state];
            const quantity: number = action.payload.quantity;
            // Trường hợp mặt hàng đã có trong giỏ => sửa quantity
            if (action.payload.checkIndexProduct > -1) {
                const { checkIndexProduct } = action.payload;
                newDataCart[checkIndexProduct].quantity += quantity;
            }
            // Trường hợp mặt hàng chưa có trong giỏ => thêm mới
            else {
                const data: any = action.payload.data;
                data.quantity = quantity;
                newDataCart.push(data);
            }
            return newDataCart;
        }
    )
    .handleAction(appActions.addCart.failure, (state: checkListProduct[]) => {
        return state;
    })
    .handleAction(
        appActions.editQuantityProduct.success,
        (
            state: checkListProduct[],
            action: { payload: { id: string; quantity: number } }
        ) => {
            const { id, quantity } = action.payload;
            const newDataCart = [...state];
            newDataCart.map((item: { id: string; quantity: number }) => {
                if (item.id === id) {
                    item.quantity = quantity;
                }
                return item;
            });
            return newDataCart;
        }
    )
    .handleAction(
        appActions.editQuantityProduct.failure,
        (state: checkListProduct[]) => {
            return state;
        }
    )
    .handleAction(
        appActions.deleteProduct.success,
        (state: checkListProduct[], action: { payload: number }) => {
            const index = action.payload;
            const newDataCart = [...state];
            newDataCart.splice(index, 1);
            return newDataCart;
        }
    )
    .handleAction(
        appActions.deleteProduct.failure,
        (state: checkListProduct[]) => {
            return state;
        }
    );

const dataProduct = createReducer(listProduct)
    .handleAction(
        appActions.getDataProduct.success,
        (state: checkListProduct[], action: { payload: checkListProduct }) => {
            const data = action.payload;
            return data;
        }
    )
    .handleAction(appActions.getDataProduct.failure, (state: []) => {
        return state;
    });

const loading = createReducer(false)
    .handleAction(appActions.showLoading, (state: boolean) => true)
    .handleAction(appActions.hideLoading, (state: boolean) => false);

const showModal = createReducer(false)
    .handleAction(appActions.showModal, (state: boolean) => true)
    .handleAction(appActions.hideModal, (state: boolean) => false);

const rootReducers = combineReducers({
    dataProduct,
    dataCart,
    token,
    loading,
    showModal
});
export default persistReducer(persistCartConfig, rootReducers);
