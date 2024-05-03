import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const Review = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      
      <div className="md:flex">
        
        <div className="md:flex-shrink-0">
          <img className="h-60 w-full object-cover md:w-40" src="/public/review.jpg" alt="Review Image" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Review</div>
          <div className="flex mt-4">
            <button className="mr-4 focus:outline-none">
              <FontAwesomeIcon icon={faThumbsUp} className="text-green-500 text-lg" />
            </button>
            <button className="focus:outline-none">
              <FontAwesomeIcon icon={faThumbsDown} className="text-red-500 text-lg" />
            </button>
          </div>
          <p className="mt-2 text-gray-500">The best food app site, i have used in kathamndu . The support is great by phone and chat .Once my card payment went
           through but the order was not placed.Just chat with them, and they sorted it in 5 mins without fuss. </p>
         
        </div>
      </div>
    </div>
  );
}

export default Review;
