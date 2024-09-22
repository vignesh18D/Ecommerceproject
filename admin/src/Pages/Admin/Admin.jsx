// Admin.jsx
import React from 'react';
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Addproduct from '../../Components/Addproduct/Addproduct';
import { Routes, Route } from 'react-router-dom';
import Listproduct from '../../Components/Listproduct/Listproduct';

const Admin = () => {
  return (
    <div className='admin-container'>
      <Sidebar />
      <div className='admin-content'>
        <Routes>
          <Route path='/addproduct' element={<Addproduct />} />
          <Route path='/listproduct' element={<Listproduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
