import {
    CarOutlined, DashboardOutlined,

    MailOutlined
} from "@ant-design/icons";
import { Layout, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../common/Pagelayout";
import "./style.css";

const { Content } = Layout;

interface IProps {
    renderListProduct: Function;
    listProductPhone: object[];
    listProductTablet: object[];
    listProductLaptop: object[];
}
const Home = (props: IProps) => {
    const renderListProduct = (listProduct: object[]): any => {
        return props.renderListProduct(listProduct);
    };
    const { listProductPhone, listProductTablet, listProductLaptop } = props;
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
export default React.memo(Home);
