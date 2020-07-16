import { EditOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../../actions";
import PageLayout from "../../components/Pagelayout";
import { functions } from "../../functionsCommon";
import CartItem from "./CartItem";
import "./style.css";

const { Toast } = functions;

const CartPage = () => {
    const dispatch = useDispatch();
    const dataCart = useSelector((state: object | any) => state.dataCart);
    const onChangeQuantity = (quantity: number, id: string) => {
        if (id && quantity) {
            dispatch(appActions.editQuantityProduct(id, quantity));
        }
    };
    const onDeleteProduct = (id: string) => {
        if (id) {
            dispatch(appActions.deleteProduct(id));
            setTimeout(() => {
                Toast.fire({
                    icon: "success",
                    title: "Xóa thành công !",
                });
            }, 300);
        }
    };
    const renderTotalPrice = (dataCart: []) => {
        let totalPrice = 0;
        dataCart.map((item: object | any) => {
            totalPrice = totalPrice + item.price * item.quantity;
            return totalPrice;
        });
        return functions.formatTotalPrice(totalPrice);
    };
    const renderListProductsCart = (data: []) => {
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
                <div className="cart-container">
                    <Divider orientation="left">
                        <span>
                            <ShoppingCartOutlined />
                        </span>{" "}
                        Giỏ hàng của bạn
                    </Divider>
                    <div className="cart-item header">
                        <EditOutlined className="cart-item-icon" />
                        <div className="cart-item-name">
                            <p>Sản phẩm</p>
                        </div>
                        <div className="cart-item-price">
                            <p>Đơn giá</p>
                        </div>
                        <div className="cart-item-quantity">
                            <p>Số lượng</p>
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
                                <p>
                                    Tổng tiền hàng ( {dataCart.length} sản phẩm
                                    ) :{" "}
                                    <span style={{ color: "red" }}>
                                        {renderTotalPrice(dataCart)}
                                    </span>
                                </p>
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
