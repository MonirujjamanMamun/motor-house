import React, { useEffect, useState } from 'react';
import useLoadData from '../../Hooks/useLoadData';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Reviews = () => {
    const [loadData, setLoadData] = useLoadData();

    return (
        <div className='grid grid-cols-3 gap-16 my-5 w-4/5 m-auto'>
            {
                loadData.map(data => <ReviewDetails key={data.id} data={data}></ReviewDetails>)
            }
        </div>
    );
};

export default Reviews;