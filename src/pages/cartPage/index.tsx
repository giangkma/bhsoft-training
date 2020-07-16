import { EditOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appActions } from '../../actions';
import PageLayout from '../../components/Pagelayout';
import { functions } from '../../functionsCommon';
import CartItem from './CartItem';
import './style.css';
const { Toast } = functions;

const CartPage = () => {
    const dispatch = useDispatch();
    const dataCart = useSelector((state: object | any) => state.dataCart);
    const onChangeQuantity = (quantity: number, id: string) => {
        if (id && quantity) {
            console.log(quantity);
            
            dispatch(appActions.editQuantityProduct(id, quantity));
        }
    };
    const onDeleteProduct = (id: string) => {
        if (id) {
            dispatch(appActions.deleteProduct(id));
            setTimeout(() => {
                Toast.fire({
                    icon: 'success',
                    title: 'Xóa thành công !',
                });
            }, 300);
        }
    };
    const renderTotalPrice = (dataCart: []) => {
        let totalPrice = 0;
        dataCart.map((item : object | any) => {
            totalPrice = totalPrice + item.price * item.quantity;
            return totalPrice;
        });
        return functions.formatTotalPrice(totalPrice);
    };
    const renderListProductsCart = (data : []) => {
        let xhtml = null;
        xhtml = data.map((item, index) => {
            return (
                <div key={index}>
                    <CartItem
                        item={item}
                        onDeleteProduct={onDeleteProduct}
                        onChangeQuantity={onChangeQuantity}
                    />
                </div>
            );
        });
        return xhtml;
    };
    return (
        <>
            <PageLayout>
                <Divider orientation="left">Giỏ hàng của bạn</Divider>
                <div className="cart-container">
                    <div className="cart-item header">
                        <EditOutlined className="cart-item-icon" />
                        <div className="cart-item-name">
                            <h5>Sản phẩm</h5>
                        </div>
                        <div className="cart-item-price">
                            <h5>Đơn giá</h5>
                        </div>
                        <div className="cart-item-quantity">
                            <h5>Số lượng</h5>
                        </div>
                    </div>
                    {dataCart ? (
                        renderListProductsCart(dataCart)
                    ) : (
                        <p>Giỏ hàng trống</p>
                    )}
                    {dataCart ? (
                        <div className="cart-result">
                            <div>
                                <h5>
                                    Tổng tiền hàng ( {dataCart.length} sản phẩm
                                    ) :{' '}
                                    <span style={{ color: 'red' }}>
                                        {renderTotalPrice(dataCart)}
                                    </span>
                                </h5>
                            </div>
                            <div>
                                <button>Thanh toán</button>
                            </div>
                        </div>
                    ) : null}
                </div>
            </PageLayout>
        </>
    );
};
export default React.memo(CartPage);
