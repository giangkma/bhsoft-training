import React, { useState, useEffect } from "react";
import { functions } from "../../functionsCommon";
import { api } from "../../service/api";
import { withRouter } from "react-router";
import Login from "../../components/login";
const { Toast } = functions;

const LoginContainer = (props: any) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onChange = (e: any) => {
        e.target.name === "username"
            ? setUsername(e.target.value)
            : setPassword(e.target.value);
    };
    useEffect(() => {
        const checkLoginUser = functions.checkLoginUser();
        if (checkLoginUser) {
            props.history.push("/"); //Đã login
        }
    }, [props.history]);

    const submitForm = (e: any) => {
        e.preventDefault();
        if (!username || !password) {
            setError("Hãy nhập đủ Tài khoản và mật khẩu");
        } else {
            api.Login(username, password).then((res: any) => {
                if (res.STATUS === 400) {
                    setError("Tài khoản hoặc mật khẩu không chính xác !");
                } else {
                    localStorage.setItem("token", res.token);
                    Toast.fire({
                        icon: "success",
                        title: "Đăng nhập thành công !",
                    });
                    props.history.push("/");
                }
            });
        }
    };
    return (
        <Login
            submitForm={submitForm}
            onChange={onChange}
            username={username}
            password={password}
            error={error}
        />
    );
};
export default withRouter(React.memo(LoginContainer));
