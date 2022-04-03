import React from 'react';

const Home = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className=''>
                <h1 className='text-5xl text-bold'>Your next Yamaha Motor</h1>
                <h1 className='text-5xl text-blue-500 text-bold mt-3'>Your best Motor</h1>
                <p className='mt-3'>Yamaha Motor Corporation, USA (YMUS), is a recognized leader in the outdoor recreation industry. </p>
                <button className='rounded bg-blue-400 text-white py-3 px-6 mt-4 hover:bg-blue-500'>Live demo</button>
            </div>
            <div>
                <img src="https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/Models/2022/aa28e049-b34b-40a8-8ed0-694d2d2bd9d8.png" alt="yamaha-R15" />
            </div>
        </div>
    );
};

export default Home;