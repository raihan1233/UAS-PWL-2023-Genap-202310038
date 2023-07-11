import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Login from '../../modules/Registrations/login/Login'
import BasePage from './BasePage'
import Layout from '../../layouts/Layout'
import Register from '../../modules/Registrations/register/Register'
import FormAddProduct from '../../modules/Admin/FormAddProduct'
const AppRoute = () => {
  return (
    <Routes>
        <Route index element={<Navigate to='/signin' />} />
        <Route path='signin' element={<Login />} />
        <Route path='signup' element={<Register />} />
        <Route path='admin-post' element={<FormAddProduct />} />
        <Route path='*' element={<Layout> <BasePage /> </Layout>} />
    </Routes>
  )
}

export default AppRoute;