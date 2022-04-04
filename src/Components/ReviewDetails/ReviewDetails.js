import React from 'react';

const ReviewDetails = ({ data }) => {
    const { name, reviews, reviewsDetails } = data;
    return (
        <div className='border p-7 shadow-2xl rounded'>
            <h1>Name: {name}</h1>
            <p><small>Reviews: {reviews}</small></p>
            <p><small>ReviewsDetails: {reviewsDetails}</small></p>
        </div>
    );
};

export default ReviewDetails;