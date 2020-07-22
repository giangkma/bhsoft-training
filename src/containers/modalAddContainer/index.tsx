import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { functions } from '../../common/functions';
import ModalAdd from '../../components/modalAdd';
import { storage } from '../../firebaseConnect';
import { appActions } from '../../redux/actions';

const initState: any = {};

const ModalAddContainer = () => {
    const [fileImage, setFileImage] = useState(initState);
    const [urlFileImage, setUrlFileImage] = useState('');
    const [progressFileImage, setProgressFileImage] = useState(0);
    const [showProgress, setShowProgress] = useState(false);
    const dispatch = useDispatch();
    const showModal = useSelector(
        (state: { showModal: boolean }) => state.showModal
    );

    const submitForm = async (values: any) => {
        if (!urlFileImage) {
            functions.notificationError('Hãy upload ảnh trước !');
        } else {
            dispatch(appActions.hideModal());
            const formUpload: any = {};
            formUpload.name = values.name;
            formUpload.price = values.price;
            formUpload.description = values.description;
            formUpload.discount = values.discount;
            formUpload.numberOfReviews = functions.random();
            formUpload.rate = 5;
            formUpload.qty = functions.random();
            formUpload.image = urlFileImage;
            dispatch(appActions.uploadProduct.request(formUpload));
        }
    };
    const selectImage = (e: any) => {
        const isLt2M = e.target.files[0].size / 1024 / 1024 < 2;
        if (!isLt2M)
            functions.notificationError('Hãy chọn ảnh có dung lượng < 2mb !');
        else setFileImage(e.target.files[0]);
    };
    const uploadFileImage = () => {
        if (fileImage.name === undefined) {
            functions.notificationError('Hãy chọn 1 file ảnh !');
        } else if (
            fileImage.name.split('.')[1] === 'jpg' ||
            fileImage.name.split('.')[1] === 'png'
        ) {
            setShowProgress(true);
            const upload = storage
                .ref(`Images/${fileImage.name}`)
                .put(fileImage);
            upload.on(
                'state_changed',
                (snapshot) => {
                    //progress
                    const progressFileImage = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgressFileImage(progressFileImage);
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    //complete
                    storage
                        .ref(`Images`)
                        .child(fileImage.name)
                        .getDownloadURL()
                        .then((urlFileImage) => {
                            setUrlFileImage(urlFileImage);
                        });
                }
            );
        } else {
            functions.notificationError(
                'Hãy chọn file có định dạng .jpg hoặc .png !'
            );
        }
    };

    const handleCancel = () => {
        dispatch(appActions.hideModal());
    };

    return (
        <ModalAdd
            submitForm={submitForm}
            selectImage={selectImage}
            uploadFileImage={uploadFileImage}
            handleCancel={handleCancel}
            showModal={showModal}
            showProgress={showProgress}
            progressFileImage={progressFileImage}
        />
    );
};
export default React.memo(ModalAddContainer);
