import React from 'react';
import Books from './Books';
import SingleBook from './SingleBook';
import Signin from './Signin';
import Signup from './Signup';
import {Routes, Route } from "react-router-dom"

const MainRoutes = () => {
  return (
    <Routes>
         <Route path='/' element={<Books/>} />
         <Route path='/books/:id' element={<SingleBook/>} />
         <Route path='/signin' element={<Signin/>} />
         <Route path='signup' element={<Signup/>} />
         <Route path='*' element={<h3>Page Not Found</h3>} />

    </Routes>
  )
}

export default MainRoutes