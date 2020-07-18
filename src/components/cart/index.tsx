import { EditOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import React from "react";
import PageLayout from "../../common/Pagelayout";
import CartItem from "./CartItem";
import "./style.css";

interface IProps {
    onChangeQuantity: Function;
    onDeleteProduct: Function;
    renderTotalPrice: Function;
    dataCart: [];
}
const Cart = (props: IProps) => {
    const { dataCart } = props;
    const onChangeQuantity = (quantity: number, id: string) => {
        props.onChangeQuantity(quantity, id);
    };
    const onDeleteProduct = (id: string) => {
        props.onDeleteProduct(id);
    };
    const renderTotalPrice = (dataCart: []): any => {
        return props.renderTotalPrice(dataCart);
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
export default React.memo(Cart);
