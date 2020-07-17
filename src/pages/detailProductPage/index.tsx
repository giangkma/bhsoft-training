import React from 'react';
import DetailProductContainer from '../../containers/detailProductContainer';
import './style.css';

const ProductPage = () => {
    return (
        <DetailProductContainer />
    );
};
export default React.memo(ProductPage);
