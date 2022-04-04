import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';

const ReviewDetails = ({ data }) => {
    const { name, reviews, reviewsDetails } = data;
    return (
        <div className='border p-7 shadow-2xl rounded bg-gray-100'>
            <h1> <small className='font-bold'>Name:</small> <small className='text-xl'>{name}</small></h1>
            <p><small>Reviews:</small><Rating
                initialRating={reviews}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                readonly
            ></Rating></p>
            <p><small>ReviewsDetails : </small> {reviewsDetails}</p>
        </div>
    );
};

export default ReviewDetails;