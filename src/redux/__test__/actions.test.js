import { appActions } from "../actions";
import * as CONSTANTS from "../constants";

describe("actions login", () => {
    it("Check login user", () => {
        const user = {
            email: "user@gamil.com",
            password: "password",
        };
        const expectedAction = {
            type: CONSTANTS.LOGIN,
            payload: user,
        };
        expect(appActions.login.request(user)).toEqual(expectedAction);
    });
    it("Check login user success", () => {
        const token = {
            token: "token",
        };
        const expectedAction = {
            type: CONSTANTS.LOGIN_SUCCESS,
            payload: token,
        };
        expect(appActions.login.success(token)).toEqual(expectedAction);
    });
});

describe("actions add to cart", () => {
    it("Check add to cart", () => {
        const data = {
            data: {
                name: "string",
                image: "string",
                price: 10,
                discount: 1,
                description: "string",
                id: "string",
            },
            quantity: 1
        };
        const expectedAction = {
            type: CONSTANTS.ADD_CART,
            payload: data,
        };
        expect(appActions.addCart.request(data)).toEqual(expectedAction);
    });
    it("Check add to cart success", () => {
        const data = {
            data: {
                name: "string",
                image: "string",
                price: 10,
                discount: 1,
                description: "string",
                id: "string",
            },
            quantity: 1
        };
        const expectedAction = {
            type: CONSTANTS.ADD_CART_SUCCESS,
            payload: data,
        };
        expect(appActions.addCart.success(data)).toEqual(expectedAction);
    });
});


describe("actions upload product", () => {
    it("Check upload product", () => {
        const data = {
            data: {
                name: "string",
                image: "string",
                price: 10,
                discount: 1,
                description: "string",
                id: "string",
            }
        };
        const expectedAction = {
            type: CONSTANTS.UPLOAD_PRODUCT,
            payload: data,
        };
        expect(appActions.uploadProduct.request(data)).toEqual(expectedAction);
    });
    it("Check upload product success", () => {
        const data = {
            data: {
                name: "string",
                image: "string",
                price: 10,
                discount: 1,
                description: "string",
                id: "string",
            }
        };
        const expectedAction = {
            type: CONSTANTS.UPLOAD_PRODUCT_SUCCESS,
            payload: data,
        };
        expect(appActions.uploadProduct.success(data)).toEqual(expectedAction);
    });
});

describe("actions edit quantity product cart", () => {
    it("Check edit quantity product cart", () => {
        const request = {
            id: "string",
            quantity: 2
        };
        const expectedAction = {
            type: CONSTANTS.EDIT_QUANTITY_PRODUCT,
            payload: request,
        };
        expect(appActions.editQuantityProduct.request(request)).toEqual(expectedAction);
    });
    it("Check edit quantity product cart success", () => {
        const request = {
            id: "string",
            quantity: 2
        };
        const expectedAction = {
            type: CONSTANTS.EDIT_QUANTITY_PRODUCT_SUCCESS,
            payload: request,
        };
        expect(appActions.editQuantityProduct.success(request)).toEqual(expectedAction);
    });
});

describe("actions delete product cart", () => {
    it("Check delete product cart", () => {
        const id = "phone";
        const expectedAction = {
            type: CONSTANTS.DELETE_PRODUCT,
            payload: id,
        };
        expect(appActions.deleteProduct.request(id)).toEqual(expectedAction);
    });
    it("Check delete product cart success", () => {
        const index = 2;
        const expectedAction = {
            type: CONSTANTS.DELETE_PRODUCT_SUCCESS,
            payload: index,
        };
        expect(appActions.deleteProduct.success(index)).toEqual(expectedAction);
    });
});

describe("actions get data product from api", () => {
    it("Check get data product from api", () => {
        const expectedAction = {
            type: CONSTANTS.GET_DATA_PRODUCT,
        };
        expect(appActions.getDataProduct.request()).toEqual(expectedAction);
    });
    it("Check get data product from api success", () => {
        const data = [
            {
                name: "string",
                image: "string",
                price: 10,
                discount: 1,
                description: "string",
                id: "string",
            }
        ];
        const expectedAction = {
            type: CONSTANTS.GET_DATA_PRODUCT_SUCCESS,
            payload: data,
        };
        expect(appActions.getDataProduct.success(data)).toEqual(expectedAction);
    });
});