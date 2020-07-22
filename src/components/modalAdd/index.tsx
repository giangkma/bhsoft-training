import { Button, Form, Input, InputNumber, Modal } from "antd";
import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { appActions } from "../../redux/actions";
import { functions } from "../../common/functions";
interface IProps {
    onShowModal: Function;
    handleOk: Function;
    handleCancel: Function;
    showModal: boolean;
}

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
};

const validateMessages = {
    required: "Hãy nhập ${label}!",
    types: {
        email: "${label} không hợp lệ !",
        number: "${label} không hợp lệ !",
    }
};

const ModalAdd = (props: IProps) => {
    const dispatch = useDispatch();
    const { showModal } = props;
    const submitForm = (values: any) => {
        console.log(values);
        const id = `phone-${functions.random()}`
        console.log(id);
        
    };

    const handleCancel = () => {
        dispatch(appActions.hideModal());
    };

    return (
        <>
            <Modal
                title="Thêm sản phẩm"
                visible={showModal}
                onCancel={handleCancel}
            >
                <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={submitForm}
                    validateMessages={validateMessages}
                >
                    <Form.Item
                        name={["name"]}
                        label="Tên"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={["price"]}
                        label="Giá"
                        rules={[{ required: true, type: "number", min: 0 }]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        name={["discount"]}
                        label="Giảm giá"
                        rules={[{ required: true, type: "number", min: 0 }]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={["description"]} label="Ưu đãi">
                        <Input.TextArea />
                    </Form.Item>
                    <hr />
                    <div className="button-actions">
                        <Button onClick={handleCancel} >Đóng</Button>
                        <Button type="primary" htmlType="submit">
                            Xong
                        </Button>
                    </div>
                </Form>
            </Modal>
        </>
    );
};
export default React.memo(ModalAdd);
