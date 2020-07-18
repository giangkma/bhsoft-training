import { ThunderboltOutlined } from "@ant-design/icons";
import { Card, Col, Rate, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tablet from "../../components/tablet";
import { functions } from "../../common/functions";
import { api } from "../../service/api";

const TabletContainer = () => {
    const [listProduct, setListProduct] = useState([]);
    useEffect(() => {
        const getListDataProduct = () => {
            const dataProduct:any = api.data.tablet;
            setListProduct(dataProduct);
        };
        getListDataProduct();
    }, []);

    const renderListProduct = () => {
        let xhtml = null;
        if (listProduct.length === 0) return <Skeleton active />;
        xhtml = listProduct.map((item: object|any, index: number) => {
            return (
                <Col
                    className="content-products-card"
                    xs={12}
                    sm={8}
                    md={6}
                    lg={5}
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
                                    <strong>{functions.formatPrice(item.price)}</strong>
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
                                        <Rate disabled allowHalf defaultValue={item.rate} />
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
        <Tablet renderListProduct={renderListProduct}/>
    );
};
export default React.memo(TabletContainer);
