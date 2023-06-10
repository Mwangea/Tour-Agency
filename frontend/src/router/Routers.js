import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../Pages/Home';
import Tours from './../Pages/Tours';
import Login from './../Pages/Login';
import Register from './../Pages/Register';
import TourDetails from './../Pages/TourDetails';
import SearchResultList from './../Pages/SearchResultList';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/tours/:id' element={<TourDetails />} />
        <Route path='/tours/search' element={<SearchResultList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default Routers