import React from 'react';
import Lottie from "lottie-react";
import error from "../../assets/55873-404-error-page.json"

const ErrorPage = () => {
    return (
        <div className='w-6/12 mx-auto mt-20'>
            <Lottie animationData={error} loop={true} />;
        </div>
    );
};

export default ErrorPage;