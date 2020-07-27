import rootReducers from "../reducer";
import * as CONSTANTS from "../constants";

const initialState= {
    dataProduct: [],
    dataCart: [],
    token: "",
    loading: false,
    showModal: false,
};
const dataProduct = {
    name: "string",
    image: "string",
    price: 10,
    discount: 1,
    description: "string",
    id: "string",
    numberOfReviews: 1,
    rate: 4,
    qty: 3,
    quantity: 1,
};

describe("Check reducer show modal add", () => {
    it("Show modal", () => {
        const expectedOutput = {
            dataProduct: [],
            dataCart: [],
            token: null,
            loading: false,
            showModal: true,
        };
        const actions = {
            type: CONSTANTS.SHOW_MODAL_ADD,
        };
        expect(rootReducers(initialState, actions)).toEqual(expectedOutput);
    });
    it("Hide modal", () => {
        const expectedOutput = {
            dataProduct: [],
            dataCart: [],
            token: null,
            loading: false,
            showModal: false,
        };
        const actions = {
            type: CONSTANTS.HIDE_MODAL_ADD,
        };
        expect(rootReducers(initialState, actions)).toEqual(expectedOutput);
    });
});

describe("Check reducer data products", () => {
    it("Get data products success", () => {
        const data = [dataProduct];
        const expectedOutput = {
            dataProduct: data,
            dataCart: [],
            token: null,
            loading: false,
            showModal: false,
        };
        const actions = {
            type: CONSTANTS.GET_DATA_PRODUCT_SUCCESS,
            payload: data,
        };
        expect(rootReducers(initialState, actions)).toEqual(expectedOutput);
    });
    it("Upload data products success", () => {
        const data = dataProduct;
        const expectedOutput = {
            dataProduct: [data, ...initialState.dataProduct],
            dataCart: [],
            token: null,
            loading: false,
            showModal: false,
        };
        const actions = {
            type: CONSTANTS.UPLOAD_PRODUCT_SUCCESS,
            payload: data,
        };
        expect(rootReducers(initialState, actions)).toEqual(expectedOutput);
    });
});

describe("Check reducer data cart", () => {
    it("Add product to cart success", () => {
        const data = {
            quantity: 1,
            checkIndexProduct: -1,
            data: dataProduct,
        };
        const expectedOutput = {
            dataProduct: [],
            dataCart: [data.data],
            token: null,
            loading: false,
            showModal: false,
        };
        const actions = {
            type: CONSTANTS.ADD_CART_SUCCESS,
            payload: data,
        };
        expect(rootReducers(initialState, actions)).toEqual(expectedOutput);
    });
    it("Edit quantity products success", () => {
        const data = {
            id: "phone",
            quantity: 2,
        };
        const initialState = {
            dataProduct: [],
            dataCart: [dataProduct],
            token: null,
            loading: false,
            showModal: false,
        };
        const newDataCart = dataProduct;
        const expectedOutput = {
            dataProduct: [],
            dataCart: [newDataCart],
            token: null,
            loading: false,
            showModal: false,
        };
        const actions = {
            type: CONSTANTS.EDIT_QUANTITY_PRODUCT_SUCCESS,
            payload: data,
        };
        expect(rootReducers(initialState, actions)).toEqual(expectedOutput);
    });
});
