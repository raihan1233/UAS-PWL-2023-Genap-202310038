import React from "react";
import { Container, Row, Col} from 'react-bootstrap'

import NavbarAdmin from './components/NavbarAdmin'
import ButtonImages from './components/ButtonImages'

const FormAddProduct = () => {
    return (
        <Container fluid>
            <Row>
                <Col lg={3} className='p-0'>
                    <NavbarAdmin />
                </Col>
                <Col lg={9}>
                    <Container>
                        <Row>
                            <Col lg={{ span: 10, offset: 1 }}>
                                <Row className='my-5'>
                                    <ButtonImages />
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>

    )
}

export default FormAddProduct;