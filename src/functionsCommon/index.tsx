import Swal from 'sweetalert2';
import jwt from 'jsonwebtoken';
const KEY_JWT = 'giang';

const formatPrice = (price: number) => {
    let million: number = Math.floor(price / 1000000);
    let hundred: any = (price - million * 1000000) / 1000;
    let thousand: any = `000`;
    if (hundred === 0) hundred = `000`;
    else if (hundred < 100) hundred = `0${hundred}`;

    if (price === 0) {
        return `Trả góp 0%`;
    } else if (price < 1000000) {
        return `${hundred}.${thousand}VNĐ`;
    }
    return `${million}.${hundred}.${thousand}VNĐ`;
};
const formatTotalPrice = (price: number) => {
    if(price === 0) return `0 VNĐ`;
    let million: number = Math.floor(price / 1000000);
    let hundred: any = (price - million * 1000000) / 1000;
    let thousand: any = `000`;
    if (hundred === 0) hundred = `000`;
    else if (hundred < 100) hundred = `0${hundred}`;
    if (price < 1000000) {
        return `${hundred}.${thousand}VNĐ`;
    }
    return `${million}.${hundred}.${thousand}VNĐ`;
};
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
});
const randomNumber = () => {
    return Math.floor(Math.random() * 100) + 5;
};
const randomRate = () => {
    return Math.floor(Math.random() * 5);
};
const checkLoginUser = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }
    return true;
};
const getInforUser = () => {
    const token = localStorage.getItem('token');
    if (token) {
        const decodedToken = jwt.verify(token, KEY_JWT);
        return decodedToken;
    }
    return false;
};

export const functions = {
    formatPrice,
    randomNumber,
    randomRate,
    Toast,
    checkLoginUser,
    getInforUser,
    formatTotalPrice,
};
