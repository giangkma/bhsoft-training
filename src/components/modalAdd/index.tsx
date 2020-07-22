import { CloudUploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Modal } from 'antd';
import React from 'react';
import './style.css';

interface IProps {
    uploadFileImage: Function;
    selectImage: Function;
    handleCancel: Function;
    showModal: boolean;
    submitForm: Function;
    showProgress: boolean;
    progressFileImage: number;
}
// interface checkValuesForm {
//     image: string;
//     price: number;
//     discount: number;
//     description: string;
//     name: string
// }
const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
};
const validateMessages = {
    required: 'Hãy nhập ${label}!',
    types: {
        email: '${label} không hợp lệ !',
        number: '${label} không hợp lệ !',
    },
};
const ModalAdd = (props: IProps) => {
    const { showModal, showProgress, progressFileImage } = props;
    const submitForm = async (values: any) => {
        props.submitForm(values);
    };
    const selectImage = (e: any) => {
        props.selectImage(e);
    };
    const uploadFileImage = () => {
        props.uploadFileImage();
    };

    const handleCancel = () => {
        props.handleCancel();
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
                    <Form.Item name="image" label="Ảnh">
                        <div>
                            <Input
                                id="fileImage"
                                type="file"
                                onChange={selectImage}
                                accept=".jpg"
                            />
                            {showProgress ? (
                                <progress value={progressFileImage} max="100" />
                            ) : null}
                        </div>
                    </Form.Item>

                    <div className="button-actions upload">
                        <Button
                            type="primary"
                            icon={<CloudUploadOutlined />}
                            onClick={uploadFileImage}
                        >
                            Upload Image
                        </Button>
                    </div>
                    <Form.Item
                        name="name"
                        label="Tên"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="Giá"
                        rules={[{ required: true, type: 'number', min: 0 }]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        name="discount"
                        label="Giảm giá"
                        rules={[{ required: true, type: 'number', min: 0 }]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={['description']} label="Ưu đãi">
                        <Input.TextArea />
                    </Form.Item>
                    <hr />
                    <div className="button-actions">
                        <Button onClick={handleCancel}>Đóng</Button>
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
