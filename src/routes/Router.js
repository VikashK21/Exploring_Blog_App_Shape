import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { ChangePass, Login } from '../pages/Login';
import Signup from '../pages/Signup';
import Error from '../pages/Error';
import Verify from '../pages/Auth';
import CreateBlog from '../pages/Home/CreateBlog';


function Routers() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/login' element={<Login />} />
        <Route path='/change_password' element={<ChangePass />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<CreateBlog />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default Routers