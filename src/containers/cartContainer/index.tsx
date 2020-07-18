import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../../actions";
import Cart from "../../components/cart";
import { functions } from "../../common/functions";

const CartContainer = () => {
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
    return (
        <Cart
            dataCart={dataCart}
            onChangeQuantity={onChangeQuantity}
            onDeleteProduct={onDeleteProduct}
            renderTotalPrice={renderTotalPrice}
        />
    );
};
export default React.memo(CartContainer);
