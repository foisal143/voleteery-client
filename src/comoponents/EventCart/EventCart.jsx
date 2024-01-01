import moment from 'moment/moment';
import React from 'react';
import { FaTrash } from 'react-icons/fa';

const EventCart = ({ e, handlerUpdate, handlerDelete }) => {
  const { _id, name, date, image, status } = e;
  return (
    <div className="flex border p-2 gap-5">
      <img className="w-32 h-32" src={image} alt="" />
      <div className="flex relative justify-between w-full">
        <div>
          <h3>{name}</h3>
          <p>{moment(date).format('DD MMMM YYYY')}</p>
        </div>
        {status ? (
          <p className="text-red-400 absolute right-0 bottom-0">Canceled</p>
        ) : (
          <button
            onClick={() => handlerUpdate(_id)}
            className="btn absolute right-0 bottom-0 btn-neutral"
          >
            Cancel
          </button>
        )}
        {status && (
          <button
            onClick={() => handlerDelete(_id)}
            className="bg-red-200 w-fit h-fit text-red-500 p-2 rounded-full"
          >
            <FaTrash></FaTrash>
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCart;
