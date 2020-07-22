import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalAdd from "../../components/modalAdd";
import { appActions } from "../../redux/actions";

const DetailProductContainer = () => {
    const showModal = useSelector((state: {showModal: boolean}) => state.showModal);

    const dispatch = useDispatch();
    const onShowModal = () => {
        dispatch(appActions.showModal());
    };

    const handleOk = () => {
        dispatch(appActions.hideModal());
    };

    const handleCancel = () => {
        dispatch(appActions.hideModal());
    };

    return (
        <ModalAdd
            showModal={showModal}
            onShowModal={onShowModal}
            handleOk={handleOk}
            handleCancel={handleCancel}
        />
    );
};
export default React.memo(DetailProductContainer);
