import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BLog = () => {
    const rabbi = useLoaderData()
    console.log(rabbi);
    return (
        <div>
            <h1>Blog Page Comming Soon!</h1>
        </div>
    );
};

export default BLog;