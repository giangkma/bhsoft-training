import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { appActions } from "../../redux/actions";
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

    const submitForm = async (e: any) => {
        e.preventDefault();
        let checkEmail = functions.onCheckEmail(email);
        let checkPassword = functions.onCheckPassword(password);
        if (checkEmail !== true ) {
            setError(checkEmail);
        } else if (checkPassword !== true){
            setError(checkPassword);
        }
        else {
            await dispatch(appActions.login.request({
                email: email,
                password: password
            }));
            if (token) {
                props.history.push("/");
            }
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
