import React from 'react'
import { Container, Image } from 'react-bootstrap'
import ErrorImg from '../../../assets/illustrations/404.png'

export default function Error404() {
  return (
    <Container>
        <Image src={ErrorImg} fluid />
        <p className='text-center text-bold fs-8'>Oops.. something was wrong</p>
    </Container>
  )
}
