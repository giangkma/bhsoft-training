import {
    call,
    delay,
    put,
    select,
    takeEvery,
    takeLatest,
} from "redux-saga/effects";
import { appActions } from "./actions";
import * as CONSTANTS from "./constants";
import { functions } from "./common/functions";
import { api } from "./service/api";

const { notificationSuccess, notificationError } = functions;

interface checkPayloadEditquantity {
    type: string;
    payload: {
        id: string;
        quantity: number;
    };
}
interface checkPayloadDeleteProduct {
    type: string;
    payload: {
        id: string;
    };
}
interface checkPayloadAddProduct {
    type: string;
    payload: {
        data: checkListProduct;
        quantity: number;
    };
}
interface checkPayloadLogin {
    type: string;
    payload: {
        email: string;
        password: string;
    };
}
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
function* getDataProduct() {
    try {
        yield put(appActions.showLoading());
        let response = yield call(api.getDataProduct);
        if (response.status === 200) {
            const { data } = response;
            yield put(appActions.getDataProductSuccess(data));
            yield put(appActions.hideLoading());
        } else {
            yield put(appActions.getDataProductFail());
            yield put(appActions.hideLoading());
            notificationError("Lấy dữ liệu lỗi !");
        }
    } catch (error) {
        notificationSuccess("Đã xảy ra lỗi !");
    }
}
function* editQuantityProduct(payload: checkPayloadEditquantity) {
    try {
        const { id, quantity } = payload.payload;
        if (id && quantity) {
            yield put(appActions.editQuantityProductSuccess(id, quantity));
        } else {
            yield put(appActions.editQuantityProductFail("error"));
        }
    } catch (error) {
        notificationSuccess("Đã xảy ra lỗi !");
    }
}
function* deleteProduct(payload: checkPayloadDeleteProduct) {
    try {
        yield put(appActions.showLoading());
        const { id } = payload.payload;
        if (id) {
            const dataCart = yield select(
                (state: { dataCart: checkListProduct[] }) => state.dataCart
            );
            let checkIndexProduct: number = 0;
            dataCart.map((item: checkListProduct, index: number) => {
                if (item.id === id) {
                    checkIndexProduct = index;
                }
                return checkIndexProduct;
            });
            yield delay(700);
            if (typeof checkIndexProduct === "number") {
                yield put(appActions.deleteProductSuccess(checkIndexProduct));
                yield put(appActions.hideLoading());
                notificationSuccess("Xóa thành công !");
            } else {
                yield put(appActions.deleteProductFail("error"));
                yield put(appActions.hideLoading());
                notificationSuccess("Xóa không thành công !");
            }
        }
    } catch (error) {
        notificationError("Đã xảy ra lỗi !");
    }
}
function* addCart(payload: checkPayloadAddProduct) {
    try {
        yield put(appActions.showLoading());
        const { data, quantity } = payload.payload;
        if (data) {
            const dataCart = yield select(
                (state: { dataCart: checkListProduct[] }) => state.dataCart
            );
            let checkIndexProduct: number = 0;
            dataCart.map((item: checkListProduct, index: number) => {
                if (item.id === data.id) {
                    checkIndexProduct = index;
                }
                return checkIndexProduct;
            });

            if (checkIndexProduct === 0) {
                yield put(appActions.addCartSuccess(data, quantity));
            } else {
                yield put(
                    appActions.addCartSuccess(checkIndexProduct, quantity)
                );
            }
            yield delay(700);
            yield put(appActions.hideLoading());
            notificationSuccess("Thêm vào giỏ hàng thành công !");
        } else {
            yield put(appActions.addCartFail("error"));
            yield put(appActions.hideLoading());
            notificationError("Thêm vào giỏ hàng thất bại !");
        }
    } catch (error) {
        notificationError("Đã xảy ra lỗi !");
    }
}
function* loginSaga(payload: checkPayloadLogin) {
    try {
        yield put(appActions.showLoading());
        let user = payload.payload;
        let response = yield call(api.login, user);
        if (response.status === 200) {
            const { token } = response.data.user;
            localStorage.setItem("token", token);
            yield put(appActions.loginSuccess(token));
            yield put(appActions.hideLoading());
            notificationSuccess(
                "Đăng nhập thành công ! Chào mừng bạn đến BHSoft App !"
            );
        } else {
            yield put(appActions.loginFail());
            yield put(appActions.hideLoading());
            notificationError("Đăng nhập thất bại !");
        }
    } catch (error) {
        notificationError("Đã xảy ra lỗi !");
    }
}
function* logoutSaga() {
    try {
        yield put(appActions.logoutSuccess());
        notificationSuccess("Đăng xuất thành công !");
    } catch (error) {
        notificationError("Đã xảy ra lỗi !");
    }
}

export default function* rootSaga() {
    yield takeEvery(CONSTANTS.GET_DATA_PRODUCT, getDataProduct);
    yield takeEvery(CONSTANTS.ADD_CART, addCart);
    yield takeLatest(CONSTANTS.EDIT_QUANTITY_PRODUCT, editQuantityProduct);
    yield takeEvery(CONSTANTS.DELETE_PRODUCT, deleteProduct);
    yield takeEvery(CONSTANTS.LOGIN, loginSaga);
    yield takeEvery(CONSTANTS.LOGOUT, logoutSaga);
}
