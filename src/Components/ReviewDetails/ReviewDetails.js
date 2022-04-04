import React from 'react';

const ReviewDetails = ({ data }) => {
    const { name, reviews, reviewsDetails } = data;
    return (
        <div className='border p-7 shadow-2xl rounded bg-gray-100'>
            <h1> <small className='font-bold'>Name:</small> {name}</h1>
            <p><small className='font-bold'>Reviews:</small> {reviews}</p>
            <p><small className='font-bold text-[16px]'>ReviewsDetails:</small> {reviewsDetails}</p>
        </div>
    );
};

export default ReviewDetails;