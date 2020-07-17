import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { appActions } from "../../actions";
import DetailProduct from "../../components/detailProduct";
import { api } from "../../service/api";

interface configData {
    name: string;
    image: string;
    price: number;
    discount: number;
    description: string;
}
const initDataProduct: configData = {
    name: "",
    image: "",
    price: 0,
    discount: 0,
    description: "",
};
const DetailProductContainer = () => {
    const [dataProduct, setDataProduct] = useState(initDataProduct);
    const [quantity, setQuantity] = useState(1);
    const params: any = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        const getDataProductById = () => {
            const idProduct = params.id;
            const codeProduct: string = idProduct.split("-")[0];
            const testData: any = api.data;
            const listProduct = testData[codeProduct];
            const product = listProduct.filter(
                (product: object | any) => product.id === idProduct
            );
            if (product) {
                localStorage.setItem("product", JSON.stringify(product[0]));
                setDataProduct(product[0]);
            } else {
                const data: object | any = localStorage.getItem("product");
                setDataProduct(JSON.parse(data));
            }
        };
        getDataProductById();
    }, [params]);
    const onChangeQuantity = (value: number) => {
        setQuantity(value);
    };
    const addProductToCart = (dataProduct: any) => {
        const data = dataProduct;
        dispatch(appActions.addCart(data, quantity));
    };
    const itemsBreadcrumb: any = ["Home", "Điện thoại", `${dataProduct.name}`];

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
