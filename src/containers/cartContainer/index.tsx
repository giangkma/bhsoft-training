import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../../redux/actions";
import Cart from "../../components/cart";
import { functions } from "../../common/functions";

interface checkState {
    dataCart: checkDataCart[]
}
interface checkDataCart {
    price: number;
    quantity: number;
    name: string;
    image: string;
    id: string;
}
const CartContainer = () => {
    const dispatch = useDispatch();
    const dataCart = useSelector((state: checkState) => state.dataCart);
    const onChangeQuantity = (quantity: number, id: string) => {
        if (id && quantity) {
            dispatch(appActions.editQuantityProduct.request({id, quantity}));
        }
    };
    const onDeleteProduct = (id: string) => {
        if (id) {
            dispatch(appActions.deleteProduct.request(id));
        }
    };
    const renderTotalPrice = (dataCart: checkDataCart[]) => {
        let totalPrice = 0;
        dataCart.map((item: checkDataCart) => {
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
