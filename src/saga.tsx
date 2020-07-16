import { takeEvery, select, put, takeLatest } from 'redux-saga/effects';
import {appActions} from './actions';
import * as CONSTANTS from './constants';

function* editQuantityProduct({payload}: object|any) {
    try {
        const { id, quantity } = payload;
        if (id && quantity) {
            yield put(appActions.editQuantityProductSuccess(id, quantity));
        } else {
            yield put(appActions.editQuantityProductFail('error'));
        }
    } catch (error) {
        console.log(error);
    }
}
function* deleteProduct({payload}: object | any) {
    try {
        const { id } = payload;
        
        if (id) {
            const dataCart = yield select((state) => state.dataCart);
            let checkIndexProduct: number|any = null;
            dataCart.map((item: object|any, index:number) => {
                if (item.id === id) {
                    checkIndexProduct = index;
                }
                return checkIndexProduct;
            });
            if (typeof checkIndexProduct === 'number') {
                yield put(appActions.deleteProductSuccess(checkIndexProduct));
            } else yield put(appActions.deleteProductFail('error'));
        }
    } catch (error) {
        console.log(error);
    }
}
function* addCart({payload}: object | any) {
    try {
        const { data, quantity } = payload;
        if (data) {            
            const dataCart = yield select((state) => state.dataCart);
            let checkIndexProduct: number | any = null;
            dataCart.map((item: object | any, index: number) => {
                if (item.id === data.id) {
                    checkIndexProduct = index;
                }
                return checkIndexProduct;
            });
            
            if (checkIndexProduct === null) {
                yield put(appActions.addCartSuccess(data, quantity));

            } else {
                yield put(appActions.addCartSuccess(checkIndexProduct, quantity));
            }
        } else {
            yield put(appActions.addCartFail('error'));
        }
    } catch (error) {
        console.log(error);
    }
}

export default function* rootSaga() {
    yield takeEvery(CONSTANTS.ADD_CART, addCart);
    yield takeLatest(CONSTANTS.EDIT_QUANTITY_PRODUCT, editQuantityProduct);
    yield takeEvery(CONSTANTS.DELETE_PRODUCT, deleteProduct);
}
