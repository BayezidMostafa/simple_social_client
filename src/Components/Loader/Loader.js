import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <InfinitySpin
                width='200'
                color="#1ABCD1"
            />
        </div>
    );
};

export default Loader;