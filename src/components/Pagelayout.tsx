import { Layout } from "antd";
import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { functions } from "../functionsCommon";
import HeaderPage from "./common/Header";

const { Toast } = functions;

const PageLayout = (props : any) => {
    const history = useHistory();
    const checkLoginUser = functions.checkLoginUser();
    const inforUser: object | any = functions.getInforUser();
    
    if (!checkLoginUser) {
        Toast.fire({
            icon: 'question',
            title: 'Bạn chưa đăng nhập !',
        });
        history.push('/login');
    }

    return (
        <Layout className="layout">
            <HeaderPage inforUser={inforUser.token} />
            {props.children}
        </Layout>
    );
};
export default withRouter(PageLayout);
