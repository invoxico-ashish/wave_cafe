import React, { useEffect } from 'react';
import WaveCafeMain from './WaveCafeMain';
import Background from './Background';

function Home() {
    return (
        <>
            <div className='homeContent'>
                <div className='top'>
                    <Background />
                </div>
                <div className='bottom'>
                    <WaveCafeMain />
                </div>
            </div>
        </>
    );
};

export default Home;