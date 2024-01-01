import { useContext, useEffect, useState } from 'react';

import { AtuhContext } from '../../Authprovaider/Authprovaider';
import EventCart from '../../comoponents/EventCart/EventCart';
import toast from 'react-hot-toast';

const EventPage = () => {
  const { user, logout } = useContext(AtuhContext);
  const [events, setEvents] = useState([]);
  const url = `http://localhost:5000/apply-events?email=${user?.email}`;

  const handlerDelete = id => {
    fetch(`http://localhost:5000/apply-events/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaing = events.filter(e => e._id !== id);
          setEvents(remaing);
          toast.error('Delete Success');
        }
      });
  };

  const handlerUpdate = id => {
    fetch(`http://localhost:5000/apply-events/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: true }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          const remaing = events.filter(e => e._id !== id);
          const exist = events.find(e => e._id === id);
          const updateEvents = [exist, ...remaing];
          setEvents(updateEvents);
          toast.success('Cancel success');
        }
      });
  };

  useEffect(() => {
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setEvents(data);
          return;
        }
        logout().then().catch();
      });
  }, [url, logout]);

  return (
    <>
      {events.length > 0 ? (
        <div className="lg:w-10/12 my-12 gap-10 mx-auto grid grid-cols-1 lg:grid-cols-2">
          {events.map(e => (
            <EventCart
              key={e._id}
              handlerDelete={handlerDelete}
              handlerUpdate={handlerUpdate}
              e={e}
            ></EventCart>
          ))}
        </div>
      ) : (
        <p className="text-3xl font-semibold text-center mt-12">
          No Events Added
        </p>
      )}
    </>
  );
};

export default EventPage;
