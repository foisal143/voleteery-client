import React from 'react';
import { Link } from 'react-router-dom';

const VolentaryCart = ({ volentary }) => {
  const { _id, title, image } = volentary;
  return (
    <div className="relative rounded-md overflow-hidden">
      <img className="w-full h-full rounded-md" src={image} alt="" />
      <Link to={`join-event/${_id}`}>
        <button className="absolute py-5 cursor-pointer bg-primary text-white left-0 bottom-0 w-full text-center">
          <h3>{title || 'Not Found'}</h3>
        </button>
      </Link>
    </div>
  );
};

export default VolentaryCart;
