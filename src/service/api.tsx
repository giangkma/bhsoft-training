import jwt from 'jsonwebtoken';
import {data} from "./data";
const KEY_JWT = 'giang';

const checkLoginUser = (username: string, password: string) => {
    let token = null;
    if (username === 'a' && password === 'a') {
        token = jwt.sign({ token: username }, KEY_JWT);
        return Promise.resolve({ STATUS: 200, token });
    } else return Promise.resolve({ STATUS: 400 });
};


export const api = {
    data,
    checkLoginUser,
};
