import React from 'react'
import { Container } from 'react-bootstrap'
import AllProduct from './all-products/AllProduct'

import HeroScreen from './banners/HeroScreen'
import BestSellerProduct from './best-sellers/BestSellerProduct'

const HomeProduct = () => {
  return (
    <div className='bg-green-secondary py-8'>
      <Container>
        <HeroScreen />
        <h5 className='text-green-primary fw-600 my-8 higlights-text'>Produk Terlaris</h5>
        <BestSellerProduct />
        <h5 className='text-green-primary fw-600 my-8 higlights-text'>Produk Lainnya</h5>
        <AllProduct />
      </Container>
    </div>
  )
}

export default HomeProduct;