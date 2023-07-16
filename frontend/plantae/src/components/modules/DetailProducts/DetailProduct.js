import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import AddCart from "./components/AddCart";
import DescriptionProduct from "./components/DescriptionProduct";
import ImageDetailProduct from "./components/ImageDetailProduct";
import MaintenanceProduct from './components/MaintenanceProduct'

const DetailProduct = () => {
  return (
    <div className=" bg-green-secondary">
      <Container className=" py-8">
        <Row>
          <Col lg={8}>
            <Row>
              <Col>
                <ImageDetailProduct />
              </Col>
              <Col>
                <DescriptionProduct />
              </Col>
            </Row>
            <Row className='my-5'>
              <Col>
                <MaintenanceProduct />
              </Col>
            </Row>
          </Col>
          <Col lg={4}>
            <AddCart />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailProduct;