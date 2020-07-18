import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';

const GlobalLoading = () => {
    const showLoading = useSelector(state => state.loading);
    let xhtml = null;
    if (showLoading) {
        xhtml = (
            <div className="global-loading">
                <div className="global-loading-icon">
                    <div className="spinner-box">
                        <div className="blue-orbit leo" />

                        <div className="green-orbit leo" />

                        <div className="red-orbit leo" />

                        <div className="white-orbit w1 leo" />
                        <div className="white-orbit w2 leo" />
                        <div className="white-orbit w3 leo" />
                    </div>
                </div>
            </div>
        );
    }
    return xhtml;
};

export default GlobalLoading;
