import { Layout } from "antd";
import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { functions } from "./functions";
import HeaderPage from "./Header";

const PageLayout = (props : any) => {
    const history = useHistory();
    const token = localStorage.getItem('token');
    if (!token) {
        functions.notificationError("Bạn chưa đăng nhập !");
        history.push('/login');
    }

    return (
        <Layout className="layout">
            <HeaderPage />
            {props.children}
        </Layout>
    );
};
export default withRouter(PageLayout);
