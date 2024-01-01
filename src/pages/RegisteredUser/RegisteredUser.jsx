import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RegisteredTable from '../../comoponents/RegisteredTable/RegisteredTable';
import toast from 'react-hot-toast';

const RegisteredUser = () => {
  const registered = useLoaderData();
  const [users, setUsers] = useState(registered);
  const handlerDelete = id => {
    fetch(`http://localhost:5000/register/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          const remaing = users.filter(user => user._id !== id);
          setUsers(remaing);
          toast.error('Delete success');
        }
      });
  };
  return (
    <div className="bg-white rounded-md p-3">
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Registation Date</th>
              <th>Volenteer List</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <RegisteredTable
                key={user._id}
                handlerDelete={handlerDelete}
                user={user}
              ></RegisteredTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredUser;
