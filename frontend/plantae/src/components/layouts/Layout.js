import React from 'react'
import HeaderNavbar from './components/headers/HeaderNavbar'
import Footers from './components/footers/Footers'

export default function Layout(props) {
  return (
    <div id='main-layout'>
        <HeaderNavbar />

        <main>
            {props.children}
        </main>

        <Footers />
    </div>
  )
}
