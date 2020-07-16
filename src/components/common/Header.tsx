import {
    HomeOutlined,
    LaptopOutlined,
    LogoutOutlined,
    MobileOutlined,
    ShoppingCartOutlined,
    TabletOutlined,
} from "@ant-design/icons";
import { Badge, Layout, Menu } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { functions } from "../../functionsCommon";
import "./style.css";

const { Header } = Layout;
const { Toast } = functions;

const onLogoutAccount = () => {
    localStorage.removeItem("token");
    Toast.fire({
        icon: "success",
        title: "Đăng xuất thành công !",
    });
};

const HeaderPage = (props: any) => {
    const { url } = props.match;
    const dataCart = useSelector((state: any) => state.dataCart);
    return (
        <div>
            <Header>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item
                        className={url === "/" ? "ant-menu-item-selected" : ""}
                    >
                        <span className="menu-item">
                            <span>
                                <HomeOutlined />
                            </span>
                            <span>
                                <Link to="/">Trang chủ</Link>
                            </span>
                        </span>
                    </Menu.Item>
                    <Menu.Item
                        className={
                            url === "/smathphone"
                                ? "ant-menu-item-selected"
                                : ""
                        }
                    >
                        <span className="menu-item">
                            <span>
                                <MobileOutlined />
                            </span>
                            <span>
                                <Link to="/smathphone">Điện thoại</Link>
                            </span>
                        </span>
                    </Menu.Item>
                    <Menu.Item
                        className={
                            url === "/tablet" ? "ant-menu-item-selected" : ""
                        }
                    >
                        <span className="menu-item">
                            <span>
                                <TabletOutlined />
                            </span>
                            <span>
                                <Link to="/tablet">Tablet</Link>
                            </span>
                        </span>
                    </Menu.Item>
                    <Menu.Item
                        className={
                            url === "/laptop" ? "ant-menu-item-selected" : ""
                        }
                    >
                        <span className="menu-item">
                            <span>
                                <LaptopOutlined />
                            </span>
                            <span>
                                <Link to="/laptop">Laptop</Link>
                            </span>
                        </span>
                    </Menu.Item>

                    <Menu.Item>
                        <span className="menu-item" onClick={onLogoutAccount}>
                            <span>
                                <LogoutOutlined />
                            </span>
                            <span>
                                <Link to="/login">Đăng xuất</Link>
                            </span>
                        </span>
                    </Menu.Item>
                    <Menu.Item
                        className={
                            url === "/cart" ? "ant-menu-item-selected" : ""
                        }
                    >
                        <Badge count={dataCart.length}>
                            <span className="menu-item">
                                <span>
                                    <ShoppingCartOutlined />
                                </span>
                                <span>
                                    <Link to="/cart">Giỏ Hàng</Link>
                                </span>
                            </span>
                        </Badge>
                    </Menu.Item>
                </Menu>
            </Header>
        </div>
    );
};

export default React.memo(withRouter(HeaderPage));
