import {
    call,
    delay,
    put,
    select,
    takeEvery,
    takeLatest,
} from 'redux-saga/effects';
import { appActions } from './actions';
import * as CONSTANTS from './constants';
import { functions } from './common/functions';
import { api } from './service/api';

const { notificationSuccess, notificationError } = functions;

function* editQuantityProduct({ payload }: object | any) {
    try {
        const { id, quantity } = payload;
        if (id && quantity) {
            yield put(appActions.editQuantityProductSuccess(id, quantity));
        } else {
            yield put(appActions.editQuantityProductFail('error'));
        }
    } catch (error) {
        notificationSuccess('Đã xảy ra lỗi !');
    }
}
function* deleteProduct({ payload }: object | any) {
    try {
        yield put(appActions.showLoading());
        const { id } = payload;
        if (id) {
            const dataCart = yield select((state) => state.dataCart);
            let checkIndexProduct: number | any = null;
            dataCart.map((item: object | any, index: number) => {
                if (item.id === id) {
                    checkIndexProduct = index;
                }
                return checkIndexProduct;
            });
            yield delay(700);
            if (typeof checkIndexProduct === 'number') {
                yield put(appActions.deleteProductSuccess(checkIndexProduct));
                yield put(appActions.hideLoading());
                notificationSuccess('Xóa thành công !');
            } else {
                yield put(appActions.deleteProductFail('error'));
                yield put(appActions.hideLoading());
                notificationSuccess('Xóa không thành công !');
            }
        }
    } catch (error) {
        notificationError('Đã xảy ra lỗi !');
    }
}
function* addCart({ payload }: object | any) {
    try {
        yield put(appActions.showLoading());
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
                yield put(
                    appActions.addCartSuccess(checkIndexProduct, quantity)
                );
            }
            yield delay(700);
            yield put(appActions.hideLoading());
            notificationSuccess('Thêm vào giỏ hàng thành công !');
        } else {
            yield put(appActions.addCartFail('error'));
            yield put(appActions.hideLoading());
            notificationError('Thêm vào giỏ hàng thất bại !');
        }
    } catch (error) {
        notificationError('Đã xảy ra lỗi !');
    }
}
function* loginSaga({ payload }: object | any) {
    try {
        yield put(appActions.showLoading());
        let user = payload;
        let response = yield call(api.login, user);
        if (response.status === 200) {
            const { token } = response.data.user;
            localStorage.setItem('token', token);
            yield put(appActions.loginSuccess(token));
            yield put(appActions.hideLoading());
            notificationSuccess(
                'Đăng nhập thành công ! Chào mừng bạn đến BHSoft App !'
            );
        } else {
            yield put(appActions.loginFail());
            yield put(appActions.hideLoading());
            notificationError('Đăng nhập thất bại !');
        }
    } catch (error) {
        notificationError('Đã xảy ra lỗi !');
    }
}
function* logoutSaga() {
    try {
        yield put(appActions.logoutSuccess());
        notificationSuccess('Đăng xuất thành công !');
    } catch (error) {
        notificationError('Đã xảy ra lỗi !');
    }
}

export default function* rootSaga() {
    yield takeEvery(CONSTANTS.ADD_CART, addCart);
    yield takeLatest(CONSTANTS.EDIT_QUANTITY_PRODUCT, editQuantityProduct);
    yield takeEvery(CONSTANTS.DELETE_PRODUCT, deleteProduct);
    yield takeEvery(CONSTANTS.LOGIN, loginSaga);
    yield takeEvery(CONSTANTS.LOGOUT, logoutSaga);
}
