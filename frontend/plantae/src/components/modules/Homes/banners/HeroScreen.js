import React from 'react'
import BackgroundImg from '../../../assets/calyx/white-water-lily.jpg'

const HeroScreen = () => {
    return (
        <div style={{ height: '20rem', backgroundImage: `url(${BackgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '20px' }} />
    )
}

export default HeroScreen;