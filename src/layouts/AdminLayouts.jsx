import React from 'react';
import Navbar from '../pages/sharedPages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/sharedPages/Footer/Footer';
import AdminSiteNav from '../pages/sharedPages/AdminSiteNav/AdminSiteNav';

const Admin = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-80px)] mt-12 flex flex-col md:flex-row">
        <div className="md:w-1/4">
          <AdminSiteNav></AdminSiteNav>
        </div>
        <div className="md:w-3/4 p-5 bg-slate-200">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Admin;
