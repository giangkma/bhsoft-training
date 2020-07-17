import { Layout, Row } from "antd";
import React from "react";
import BreadcrumbPage from "../../common/BreadcrumbPage";
import PageLayout from "../Pagelayout";
import "./style.css";

const { Content } = Layout;

const Tablet = (props: any) => {
    const renderListProduct = (): any => {
        return props.renderListProduct();
    };

    const itemsBreadcrumb = ["Home", "Tablet"];

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
