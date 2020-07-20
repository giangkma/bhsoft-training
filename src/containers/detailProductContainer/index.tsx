import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { appActions } from '../../actions';
import DetailProduct from '../../components/detailProduct';

interface configData {
    name: string;
    image: string;
    price: number;
    discount: number;
    description: string;
    id: string;
}

const initDataProduct: configData = {
    name: '',
    image: '',
    price: 0,
    discount: 0,
    description: '',
    id: '',
};
const DetailProductContainer = () => {
    const listProduct = useSelector((state: {dataProduct: configData[]}) => state.dataProduct);
    const [dataProduct, setDataProduct] = useState(initDataProduct);
    const [quantity, setQuantity] = useState(1);
    const params: { id: string } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        const getDataProductById = () => {
            const idProduct: string = params.id;
            const product = listProduct.filter(
                (product: configData) => product.id === idProduct
            );
            if (product) {
                localStorage.setItem('product', JSON.stringify(product[0]));
                setDataProduct(product[0]);
            } else {
                const data: any = localStorage.getItem('product');
                setDataProduct(JSON.parse(data));
            }
        };
        getDataProductById();
    }, [listProduct, params.id]);
    const onChangeQuantity = (value: number) => {
        setQuantity(value);
    };
    const addProductToCart = (dataProduct: configData) => {
        const data = dataProduct;
        dispatch(appActions.addCart(data, quantity));
    };
    const itemsBreadcrumb: any = ['Home', 'Điện thoại', `${dataProduct.name}`];

    return (
        <DetailProduct
            itemsBreadcrumb={itemsBreadcrumb}
            dataProduct={dataProduct}
            onChangeQuantity={onChangeQuantity}
            addProductToCart={addProductToCart}
        />
    );
};
export default React.memo(DetailProductContainer);
