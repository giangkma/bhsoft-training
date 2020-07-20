import { Layout, Row } from 'antd';
import React from 'react';
import BreadcrumbPage from '../../common/BreadcrumbPage';
import PageLayout from '../../common/Pagelayout';
import './style.css';

const { Content } = Layout;
interface IProps {
    renderListProduct: Function;
}

const Tablet = (props: IProps) => {
    const renderListProduct = () => {
        return props.renderListProduct();
    };

    const itemsBreadcrumb = ['Home', 'Tablet'];

    return (
        <>
            <PageLayout>
                <Content className="content">
                    <BreadcrumbPage items={itemsBreadcrumb} />
                    <Row gutter={[16, 16]} className="content-products">
                        {renderListProduct()}
                    </Row>
                </Content>
            </PageLayout>
        </>
    );
};
export default React.memo(Tablet);
