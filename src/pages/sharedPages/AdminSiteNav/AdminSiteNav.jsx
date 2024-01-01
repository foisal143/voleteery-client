import React from 'react';
import { Link } from 'react-router-dom';
import userProfile from '../../../assets/logos/users-alt 1.png';
import plus from '../../../assets/logos/plus 1.png';
const AdminSiteNav = () => {
  return (
    <div className="space-y-5">
      <Link
        to="/admin"
        className="flex text-blue-600 text-2xl items-center gap-3"
      >
        <img className="w-6 h-6" src={userProfile} alt="" /> Volunteer register
        list
      </Link>

      <Link to="add-event" className="flex  text-2xl items-center gap-3">
        {' '}
        <img className="w-6 h-6" src={plus} alt="" /> Add New Event
      </Link>
    </div>
  );
};

export default AdminSiteNav;
