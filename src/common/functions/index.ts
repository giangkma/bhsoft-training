import Swal from 'sweetalert2';

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
    timer: 5000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
});

const notificationSuccess = (message: string) => {
    Toast.fire({
        icon: 'success',
        title: message,
    });
};
const notificationError = (message: string) => {
    Toast.fire({
        icon: 'error',
        title: message,
    });
};

const random = () => {
    return Math.floor(Math.random() * 10000);
};

const onCheckEmail = (email: string) => {
    let error: any = null;
    if (!email) {
        error = "Vui lòng nhập địa chỉ Email! ";
    }
    else if (typeof email !== "undefined") {
        const pattern = new RegExp(
            /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );
        if (!pattern.test(email)) {
            error = "Địa chỉ Email không hợp lệ !";
        }
    }
    return error !== null ? error : true;  
}
const onCheckPassword = (password: string) => {
    let error: any = null;
    if (!password) {
        error = "Vui lòng nhập Mật khẩu";
    } else if (
        typeof password === "undefined"
        || password.trim().length < password.length
        || password.split(" ").length > 1
        || password === null
        || !password.match(/^[0-9a-zA-Z]{6,}$/)
    ) {
        error = "Mật khẩu không hợp lệ !";
    }
    return error !== null ? error : true;  
}
export const functions = {
    formatPrice,
    random,
    notificationSuccess,
    notificationError,
    formatTotalPrice,
    onCheckEmail,
    onCheckPassword
};
