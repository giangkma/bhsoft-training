import axios from 'axios';
import { data } from './data';

const login = async (user: {email: string, password: string}) => {
    const url = `https://conduit.productionready.io/api/users/login`;
    let response = await axios.post(url, {
        user ,
    });
    return response;
};

export const api = {
    data,
    login,
};
