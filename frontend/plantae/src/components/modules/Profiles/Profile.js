import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Profile = () => {
    return (
        <Container fluid>
            <Row>
                <Col lg={4} style={{ height: '44rem', backgroundColor: '#364A4A' }}>
                    <div style={{ margin: '8rem 3rem 0', }}>
                        <h6 className='text-white'>My Account</h6>
                        <h4 className='text-white mt-2 mb-5'>Raihan WinCahya</h4>
                    </div>
                </Col>
                <Col lg={8} className='bg-green-secondary'>
                    ini content
                </Col>
            </Row>
        </Container>
    )
}

export default Profile;