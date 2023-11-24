import React from 'react'
import WaveCafeMain from './WaveCafeMain';
import CafeMenu from './CafeMenu';
import Background from './Background';
// improt WaveCafeMain

function Home() {
    return (
        <>
            <div className='homeContent'>
                <div className='top'>
                    <Background />
                </div>
                <div className='bottom'>
                    <WaveCafeMain />
                    <CafeMenu />
                </div>
            </div>

        </>
    )
}

export default Home