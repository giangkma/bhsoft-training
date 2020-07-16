import { DeleteOutlined } from '@ant-design/icons';
import { InputNumber } from 'antd';
import React from 'react';
import { functions } from '../../functionsCommon';
import './style.css';

interface IProps {
    item: object | any;
    onChangeQuantity: Function;
    onDeleteProduct: Function;
}

const CartItem = (props: IProps) => {
    const onChangeQuantity = (value: number) : void => {
        const idProduct = props.item.id || null;
        props.onChangeQuantity(value, idProduct);
    };
    const onDeleteProduct = (id: string) : void => {
        props.onDeleteProduct(id);
    };
    return (
        <>
            <div className="cart-item main">
                <DeleteOutlined
                    className="cart-item-icon delete"
                    onClick={() => {
                        onDeleteProduct(props.item.id);
                    }}
                />
                <div className="cart-item-name">
                    <img alt="img" src={props.item.image} />
                    <span>{props.item.name}</span>
                </div>
                <div className="cart-item-price">
                    <h5>{functions.formatTotalPrice(props.item.price)}</h5>
                </div>
                <div className="cart-item-quantity">
                    <InputNumber
                        min={1}
                        max={10}
                        value={props.item.quantity}
                        onChange={(value: any) => onChangeQuantity(value)}
                    />
                </div>
            </div>
            <hr />
        </>
    );
};
export default React.memo(CartItem);
