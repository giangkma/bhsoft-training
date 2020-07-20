import axios from "axios";

const login = async (user: { email: string; password: string }) => {
    const url = `https://conduit.productionready.io/api/users/login`;
    let response = await axios.post(url, {
        user,
    });
    return response;
};
const getDataProduct = async () => {
    const url = "https://5f11015765dd950016fbcc0a.mockapi.io/data";
    let response = await axios.get(url);
    return response;
};
export const api = {
    getDataProduct,
    login,
};
