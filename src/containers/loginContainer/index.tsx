import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { appActions } from "../../actions";
import Login from "../../components/login";
import { functions } from "../../common/functions";

interface checkState {
    token: string
}
interface IProps {
    history: {
        push: Function
    }
}
const LoginContainer = (props: IProps) => {
    const dispatch = useDispatch();
    const token = useSelector((state: checkState) => state.token);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onChange = (e: any) => {
        e.target.name === "email"
            ? setEmail(e.target.value)
            : setPassword(e.target.value);
    };
    useEffect(() => {
        if (token) {
            props.history.push("/"); //Đã login
        }
    }, [props.history, token]);

    const submitForm = (e: any) => {
        e.preventDefault();
        let checkEmail = functions.onCheckEmail(email);
        let checkPassword = functions.onCheckPassword(password);
        if (checkEmail !== true ) {
            setError(checkEmail);
        } else if (checkPassword !== true){
            setError(checkPassword);
        }
        else {
            let user: object = {
                email: email,
                password: password
            }
            dispatch(appActions.login(user));
            setTimeout(() => {
                const token = localStorage.getItem('token');
                if(token){
                    props.history.push("/");
                }
            },1500);
        }
    };
    return (
        <Login
            submitForm={submitForm}
            onChange={onChange}
            error={error}
        />
    );
};
export default withRouter(React.memo(LoginContainer));