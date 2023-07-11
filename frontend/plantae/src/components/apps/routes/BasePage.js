import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Error404 from '../../layouts/components/errors404/Error404'
import HomeProduct from '../../modules/Homes/HomeProduct'
import DetailProduct from '../../modules/DetailProducts/DetailProduct'
import Profile from '../../modules/Profiles/Profile'

const BasePage = () => {
  return (
    <Routes>
        <Route index element={<HomeProduct />} />
        <Route path='home' element={<HomeProduct />} />
        <Route path='details' element={<DetailProduct />} />
        <Route path='profile' element={<Profile />} />
        <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default BasePage;