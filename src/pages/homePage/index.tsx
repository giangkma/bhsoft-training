import { Card, Col, Layout, Row, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../service/api';
import PageLayout from '../../components/Pagelayout';
import './style.css';
import {
    ThunderboltOutlined,
    DashboardOutlined,
    CarOutlined,
    MailOutlined,
} from '@ant-design/icons';
import { Rate } from 'antd';
import { functions } from '../../functionsCommon';

const { Content } = Layout;

const HomePage = () => {
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
        xhtml = listProduct.map((item: object|any, index: number) => {
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
                                <ThunderboltOutlined />{' '}
                                {item.discount === 0 ? null : 'GIẢM'}{' '}
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
        <>
            <PageLayout>
                <Content className="content">
                    <section className="support-section mb0 mt-half">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-4 col-lg-4">
                                    <div className="feature-box media align-items-center">
                                        <div className="feature-icon mr-4 mr-md-3 mr-lg-4">
                                            <DashboardOutlined />
                                        </div>
                                        <div className="feature-content media-body">
                                            <h2>Mon - Fri / 8:00 - 18:00</h2>
                                            <p>Working Days/Hours!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4">
                                    <div className="feature-box media align-items-center">
                                        <div className="feature-icon mr-4 mr-md-3 mr-lg-4">
                                            <CarOutlined />
                                        </div>
                                        <div className="feature-content media-body">
                                            <h2>Free Return</h2>
                                            <p>30 days money back guaratee!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4">
                                    <div className="feature-box media align-items-center">
                                        <div className="feature-icon mr-4 mr-md-3 mr-lg-4">
                                            <MailOutlined />
                                        </div>
                                        <div className="feature-content media-body">
                                            <h2>support@example.com</h2>
                                            <p>Orders Support!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="banner-section mb-half">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                                    <div className="promo-banner hover-effect-1">
                                        <Link to="#">
                                            <img
                                                src="assets/images/banners/banner-1.jpg"
                                                alt="Promo Banner"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-12 order-3 col-sm-12 order-sm-3 col-md-6 order-md-2 col-lg-6">
                                    <div className="promo-banner hover-effect-1">
                                        <Link to="#">
                                            <img
                                                src="assets/images/banners/banner-2.jpg"
                                                alt="Promo Banner"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-6 order-2 col-sm-6 order-sm-2 col-md-3 order-md-3 col-lg-3">
                                    <div className="promo-banner hover-effect-1">
                                        <Link to="#">
                                            <img
                                                src="assets/images/banners/banner-3.jpg"
                                                alt="Promo Banner"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <div className="promo-banner hover-effect-1">
                                        <Link to="#">
                                            <img
                                                src="assets/images/banners/banner-4.jpg"
                                                alt="Promo Banner"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="smathphone-products products">
                        <div>
                            <h1>ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
                        </div>
                        <Row gutter={[16, 16]} className="content-products">
                            {renderListProduct(listProductPhone)}
                        </Row>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <div className="promo-banner hover-effect-2 mt-half">
                                <Link to="#">
                                    <img
                                        src="assets/images/banners/banner-6.jpg"
                                        alt="Promo Banner"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="smathphone-products products">
                        <div>
                            <h1>TABLET NỔI BẬT NHẤT</h1>
                        </div>
                        <Row gutter={[16, 16]} className="content-products">
                            {renderListProduct(listProductTablet)}
                        </Row>
                    </div>
                    <div className="smathphone-products products">
                        <div>
                            <h1>LAPTOP NỔI BẬT NHẤT</h1>
                        </div>
                        <Row gutter={[16, 16]} className="content-products">
                            {renderListProduct(listProductLaptop)}
                        </Row>
                    </div>
                </Content>
            </PageLayout>
        </>
    );
};
export default React.memo(HomePage);
