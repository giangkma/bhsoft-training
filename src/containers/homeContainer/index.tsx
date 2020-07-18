import { ThunderboltOutlined } from "@ant-design/icons";
import { Card, Col, Rate, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "../../components/home";
import { functions } from "../../common/functions";
import { api } from "../../service/api";

const HomeContainer = () => {
    const [listProductPhone, setListProductPhone] = useState([]);
    const [listProductTablet, setListProductTablet] = useState([]);
    const [listProductLaptop, setListProductLaptop] = useState([]);
    useEffect(() => {
        const getListDataProduct = () => {
            const dataProductPhone: any = api.data.phone;
            const dataProductTablet: any = api.data.tablet;
            const dataProductLaptop: any = api.data.laptop;
            setListProductPhone(dataProductPhone);
            setListProductTablet(dataProductTablet);
            setListProductLaptop(dataProductLaptop);
        };
        getListDataProduct();
    }, []);

    const renderListProduct = (listProduct: object[]) => {
        let xhtml = null;
        if (listProduct.length === 0) return <Skeleton active />;
        xhtml = listProduct.map((item: object | any, index: number) => {
            return (
                <Col
                    className="content-products-card"
                    xs={12}
                    sm={8}
                    md={6}
                    lg={6}
                    xl={4}
                    key={index}
                >
                    <Link to={`product/${item.id}`}>
                        <Card
                            hoverable
                            cover={
                                <img
                                    alt="example"
                                    className="image-product"
                                    src={item.image}
                                />
                            }
                        >
                            <div className="animation-hover-card">
                                Xem chi tiết
                            </div>
                            <div className="discount-product">
                                <ThunderboltOutlined />{" "}
                                {item.discount === 0 ? null : "GIẢM"}{" "}
                                {functions.formatPrice(item.discount)}
                            </div>
                            <div className="infor-product">
                                <h3 className="infor-product-name">
                                    {item.name}
                                </h3>
                                <div className="infor-product-price">
                                    <strong>
                                        {functions.formatPrice(item.price)}
                                    </strong>
                                    <span>
                                        {item.discount === 0
                                            ? null
                                            : functions.formatPrice(
                                                  item.price + item.discount
                                              )}
                                    </span>
                                </div>
                                <div className="rate-product">
                                    <span>
                                        <Rate
                                            disabled
                                            allowHalf
                                            defaultValue={item.rate}
                                        />
                                    </span>
                                    <span className="rate-product-comment">
                                        {item.numberOfReviews} Đánh giá
                                    </span>
                                </div>
                                <div className="infor-product-description">
                                    {item.description}
                                </div>
                            </div>
                        </Card>
                    </Link>
                </Col>
            );
        });
        return xhtml;
    };

    return (
        <Home
            renderListProduct={renderListProduct}
            listProductPhone={listProductPhone}
            listProductTablet={listProductTablet}
            listProductLaptop={listProductLaptop}

        />
    );
};
export default React.memo(HomeContainer);
