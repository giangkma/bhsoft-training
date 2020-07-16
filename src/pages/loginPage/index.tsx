import React, { useState, useEffect } from "react";
import { functions } from "../../functionsCommon";
import { api } from "../../service/api";
import { withRouter } from "react-router";
import "./style.css";

const { Toast } = functions;

const LoginPage = (props: any) => {
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
            props.history.push("/");
        }
    }, [props.history]);
    const submitForm = (e: any) => {
        e.preventDefault();
        if (!username || !password) {
            setError("Hãy nhập đủ Tài khoản và mật khẩu");
        } else {
            api.checkLoginUser(username, password).then((res: any) => {
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
        <div className="background-login">
            <div className="login-box">
                <h2>Đăng nhập</h2>
                <form>
                    <div className="user-box">
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={onChange}
                            required
                        />
                        <label>Tài khoản</label>
                    </div>
                    <div className="user-box">
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            required
                        />
                        <label>Mật khẩu</label>
                    </div>
                    <p className="error">{error}</p>
                    <button onClick={submitForm}>Đăng nhập</button>
                </form>
            </div>
        </div>
    );
};
export default withRouter(React.memo(LoginPage));
