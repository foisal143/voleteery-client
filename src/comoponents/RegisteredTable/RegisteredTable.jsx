import React from 'react';
import { FaTrash } from 'react-icons/fa';

const RegisteredTable = ({ user, handlerDelete }) => {
  const { _id, name, email, date, volenteer } = user;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>{volenteer}</td>
      <td>
        <button
          onClick={() => handlerDelete(_id)}
          className="p-3 rounded-full bg-red-200 text-red-500"
        >
          <FaTrash></FaTrash>
        </button>
      </td>
    </tr>
  );
};

export default RegisteredTable;
