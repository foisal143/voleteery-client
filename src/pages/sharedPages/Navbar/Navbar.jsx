import { Link } from 'react-router-dom';
import logo from '../../../assets/logos/Group 1329.png';
import { useContext } from 'react';
import { AtuhContext } from '../../../Authprovaider/Authprovaider';
const Navbar = () => {
  const { user } = useContext(AtuhContext);
  const link = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/donetion">Donetion</Link>
      </li>
      <li>
        <Link to="/events">Events</Link>
      </li>
      {user ? (
        user.displayName
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
      <div className="flex gap-3">
        <Link to="/register">
          <button className="btn btn-primary">Registar</button>
        </Link>
        <Link to="/admin">
          <button className="btn btn-active btn-neutral">Admin</button>
        </Link>
      </div>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className=" navbar-center lg:navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {link}
          </ul>
        </div>
        <Link to="/">
          <img className="h-20 mx-auto" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu flex items-center gap-3 menu-horizontal px-1">
          {link}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
