import { InputNumber, Layout, Rate } from 'antd';
import React from 'react';
import BreadcrumbPage from '../../common/BreadcrumbPage';
import PageLayout from '../../common/Pagelayout';
import { functions } from '../../common/functions';
import './style.css';

const { Content } = Layout;
interface IProps {
    onChangeQuantity: Function;
    addProductToCart: Function;
    itemsBreadcrumb: [];
    dataProduct: object | any;
}
const DetailProduct = (props: IProps) => {
    const {dataProduct, itemsBreadcrumb} = props;
    const onChangeQuantity = (value: number) => {
        props.onChangeQuantity(value);
    };
    const addProductToCart = (dataProduct: any) => {
        props.addProductToCart(dataProduct);
    };

    return (
        <>
            <PageLayout>
                <Content style={{ padding: '0 50px' }}>
                    <div className="container">
                        <BreadcrumbPage items={itemsBreadcrumb} />
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="product-gallery">
                                    <div className="swiper-wrapper">
                                        <img
                                            src={
                                                dataProduct
                                                    ? dataProduct.image
                                                    : ''
                                            }
                                            alt="omage"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="product-details">
                                    <h3 className="product-name">
                                        {dataProduct ? dataProduct.name : ''}
                                    </h3>
                                    <div className="product-ratings d-flex">
                                        {/* ========= RATE ================ */}
                                        <Rate
                                            disabled
                                            allowHalf
                                            defaultValue={4}
                                        />
                                    </div>
                                    <div className="product-price">
                                        <div className="infor-product-price">
                                            <strong>
                                                {functions.formatPrice(
                                                    dataProduct.price
                                                )}
                                            </strong>
                                            <span>
                                                {dataProduct.discount === 0
                                                    ? null
                                                    : functions.formatPrice(
                                                          dataProduct.price +
                                                              dataProduct.discount
                                                      )}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-description">
                                        <p>{dataProduct.description}</p>
                                    </div>
                                    <div className="product-actions">
                                        <h3>Tùy chọn</h3>

                                        <div className="product-stock">
                                            <label>Số lượng</label>
                                            <ul className="d-flex flex-wrap align-items-center">
                                                <li className="box-quantity">
                                                    <InputNumber
                                                        min={1}
                                                        max={10}
                                                        defaultValue={1}
                                                        onChange={
                                                            (value: any) => {onChangeQuantity(value)}
                                                        }
                                                    />
                                                </li>
                                                <li>
                                                    <button
                                                        type="button"
                                                        className="default-btn"
                                                        onClick={() => {
                                                            addProductToCart(
                                                                dataProduct ||
                                                                    null
                                                            );
                                                        }}
                                                    >
                                                        Thêm vào giỏ hàng
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </PageLayout>
        </>
    );
};
export default React.memo(DetailProduct);
