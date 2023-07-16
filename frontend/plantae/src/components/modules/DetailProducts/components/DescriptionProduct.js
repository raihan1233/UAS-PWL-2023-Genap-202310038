import React from 'react'
import { Container } from 'react-bootstrap';


const DescriptionProduct = () => {
    return (
        <Container>
            <h3>Peony</h3>
            <p>Terjual 1 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg> 5 (1 rating)</p>
            <h2 className='fw-600 custom-fs-5 text-green-primary'>Rp.150.000</h2>
            <hr style={{ height: 2 }} />
            <h5>Detail Produk</h5>
            <div className=' py-2'>
                <p className='m-0 py-1'>Kondisi: Baru</p>
                <p className='m-0 py-1'>Kemasan: Bucket</p>
                <p className='m-0 py-1'>Spesies: Genochaera</p>
                <p className='m-0 py-1'>Family: Piperaceae</p>
                <p className='m-0 py-1'>Genus: Peperomia</p>
                <p className='m-0 py-1'>Kingdom: Plantae</p>
            </div>
        </Container>
    )
}

export default DescriptionProduct;