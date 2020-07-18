import { Form, Input } from 'antd';
import React from 'react';
import './style.css';

interface IProps {
    onChange: Function;
    submitForm: Function;
    error: String;
}
const Login = (props: IProps) => {
    const onChange = (e: any) => {
        props.onChange(e);
    };
    const submitForm = (e: any) => {
        props.submitForm(e);
    };
    const {error} = props;
    return (
        <div className="container-login">
            <div className="login">
                <div className="header">
                    <div className="header__icon">
                        <i className="fas fa-users" />
                    </div>
                    <div className="header__title">
                        <h2>User Login</h2>
                    </div>
                </div>
                <Form className="form">
                    <div className="form__username">
                        <div className="form__username--icon form__icon">
                            <i className="fas fa-user" />
                        </div>
                        <div className="form__username--input form__input">
                            <Input
                                type="text"
                                id="email"
                                placeholder="Email"
                                name="email"
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="form__password">
                        <div className="form__password--icon form__icon">
                            <i className="fas fa-lock" />
                        </div>
                        <div className="form__password--input form__input">
                            <Input
                                type="password"
                                id="password"
                                placeholder="Password"
                                onChange={onChange}
                                name="password"
                            />
                        </div>
                    </div>
                    {error ? <p className="error__login" >{error}</p> : null}
                    <div className="form__submit">
                        <button type="submit" onClick={submitForm}>
                            <i className="fas fa-arrow-right" />
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    );
};
export default React.memo(Login);
